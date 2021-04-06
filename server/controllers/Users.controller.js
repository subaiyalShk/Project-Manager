const User  = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {
    register(req, res){
        console.log(req.body)
        User.create(req.body)
        .then(newUser => {
            console.log('new user created')
            const token = jwt.sign({
                id: newUser._id,
                email: newUser.email
            }, process.env.SECRET_KEY);

            res
            .cookie('token', token, {
                httpOnly: true
            }).json({'id':newUser._id, 'firstName':newUser.firstName, 'lastName':newUser.lastName, 'userName':newUser.userName, 'email':newUser.email});
        })
        .catch(err => {
            console.log("***********");
            console.log("ERROR IN REGISTRATION");
            res.status(400).json(err);
            }
        )
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
            .json({'id':user._id, 'firstName':user.firstName, 'lastName':user.lastName, 'email':user.email, 'userName':user.userName});

        } 
        catch(e){
            res.status(400).json({message: errMsg})
        }
    },

    logout(_, res){
        res.clearCookie('token');
        res.json({status:'Success'});
    },

    async update(request, response) {
        console.log(request.body)
        const { id } = request.params;
        const {firstName, lastName, email, userName, password, confirmPassword} = request.body;
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
            console.log('we about to update')
            let hashedPw = bcrypt.hash(user.password, 10)
            User.findOneAndUpdate({_id: id},{
                firstName, 
                lastName,
                userName, 
                email,
                hashedPw,
                confirmPassword
            },
            {
                new:true,
                useFindAndModify: true
            })
            .then(User =>{
                response.json(User)
            })
            .catch(err => {
                response.status(400).json(err)
            })
        } 
        catch(e){
            response.status(400).json({message: errMsg})
        }
    },

    detail(request, response) {
        const {id}= request.params;
        User.findOne({_id:id})
        .then(User => {
            response.json(User)
        })
        .catch(err => {
            response.status(400).json(err)
        })
    },

    list (request, response) {
        User.find({})
        .then(users => {
            response.json(users);
        })
        .catch(err=>{
            response.status(400).json(err);
        })
    }
}