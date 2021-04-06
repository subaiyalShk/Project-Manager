const { Project } = require('../models/Project.model')

module.exports.list = (request, response) => {
    Project.find({}).sort({"deadline": -1})
    // get list ordered ordered by due date 
    .then(projects => {
        response.json(projects);
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.create = (request, response) =>{
    console.log(request.body)
    const {name, lead, startDate, deadline, description} = request.body;
    Project.create({
        name, 
        lead, 
        startDate,
        deadline,  
        description,  
    })
        .then(project => {
            response.json(project)
        })
        .catch(err=>{
            response.status(400).json(err)
        })
}   

module.exports.detail = (request, response) => {
    const {id}= request.params;
    Project.findOne({_id:id})
    .then(project => {
        response.json(project)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

module.exports.update = (request, response) => {
    console.log(request.body)
    const { id } = request.params;
    const { name, lead, startDate, deadline, description, status, statusLogs} = request.body;
    Project.findOneAndUpdate({_id: id},{
        name, 
        lead, 
        startDate,
        deadline,  
        description, 
        status, 
        statusLogs
    },
        {
            new:true,
            useFundAndModify: true
        })
        .then(project =>{
            response.json(project)
        })
        .catch(err => {
            response.status(400).json(err)
        })
}
module.exports.delete = (request, response) => {
    const {id} = request.params;
    Project.deleteOne({_id:id})
    .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
    .catch(err=>{
        response.json(err)
    })
}

