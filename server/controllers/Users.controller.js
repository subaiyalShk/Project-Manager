const User  = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {
    register(req, res){
        User.create(req.body)
        .then(newUser => {
            const token = jwt.sign({
                id: newUser._id,
                email: newUser.email
            }, process.env.SECRET_KEY);

            res
            .cookie('token', token, {
                httpOnly: true
            }).json({status:'Success', token});
        })
        .catch(err => {
            console.log("***********");
            console.log("ERROR IN REGISTRATION");
            console.log(res);
            res.status(400).json(err)});
    },

    async login(req,res){
        const { email, password } = req.body;
        const errMsg = 'please check your email and password.';
        try{
            const user = await User.findOne({email});

            if(user === null){
                throw new Error(400)
            }
            
            const result = await bcrypt.compare(password, user.password);
            
            if(result===false){
                throw new Error(400);
            }

            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, process.env.SECRET_KEY);

            res
            .cookie('token', token, {
                httpOnly: true
            })
            .json({status:'Success'});

        } 
        catch(e){
            res.status(400).json({message: errMsg})
        }
    },

    logout(_, res){
        res.clearCookie('token');
        res.json({status:'Success'});
    }
}