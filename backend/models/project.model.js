import mongoose from "mongoose";


const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"Project Name Must be Unique"],
        lowercase:true,
        required:true,
        trim:true
    },

    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
})


const project=mongoose.model('project',projectSchema)

export default project;