const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength:3
    },
    message:{
        type: String,
        required:[
            true,
            "message cannot be empty"
        ],
        minlength:1
    }

},{timestamps:true})

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength:3
    },
    lead:{
        type: String,
        required: [
            true,
            "Please provide a project Lead"
        ],
        minlength:3
    },
    startDate:{
        type: String,
        required: [
            true,
            "Project start date required"
        ],
        minlength:3
    },
    deadline:{
        type: String,
        required: [
            true,
            "Project deadline date is required"
        ],
        minlength:3
    },
    description:{
        type: String,
        required:[
            true,
            "description cannot be empty"
        ],
        minlength:3
    },
    status:{
        type:String,
        default: '1',
        required:true,
    },
    statusLogs:[LogSchema]
}, {timestamps:true})


module.exports.Project = mongoose.model('Project', ProjectSchema);

