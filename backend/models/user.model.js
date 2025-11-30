import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema= new mongoose.Schema({
    email:{
        unique:true,
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:[6,'Email Must be at least 6 character Long'],
        maxLength:[50,'Email Must be at least 50 character Long']
    },
    password:{
        type:String,
        select:false
    }
})


userSchema.statics.hashPassword=async function(password) {
    return await bcrypt.hash(password,10);
}
userSchema.methods.isValidPassword=async function(password){
    return await bcrypt.compare(password, this.password) 
}

userSchema.methods.generateJwt= function(){
    return jwt.sign({email:this.email},process.env.JWT_SECRET)
}

const User= mongoose.model('user',userSchema)

export default User