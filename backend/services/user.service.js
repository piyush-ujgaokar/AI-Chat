import userModel from "../models/user.model.js"

export const createUser= async ({
    email,password
})=>{

    if(!email || !password){
        throw new Error("Email and password Are required!") 
    }

    const hashedPassword=await userModel.hashPassword(password)

    const user=userModel.create({
        email,
        password:hashedPassword
    })

    return user;
}