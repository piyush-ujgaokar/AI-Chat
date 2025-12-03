import  projectModel from '../models/project.model.js'


export const createProject=async ({
    name,userId
})=>{

    if(!name){
        throw new Error('Name is Required!')
    }
    if(!userId){
        throw new Error('UserId Is Required')
    }

    const project=projectModel.create({
        name,
        users:[userId]
    })

    return project;

}


export const getAllProjectByUserId=async ({userId})=>{
    if(!userId){
        throw new Error('UserId is required!')
    }


    const allUserProject=await projectModel.find({
        users:userId
    })

    return allUserProject
}