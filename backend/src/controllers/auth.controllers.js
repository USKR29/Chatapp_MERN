import generateToken from "../library/generateToken.js"
import User from "../models/user.model.js"
import bcrypt from 'bcrypt'

// for user login
export const login= async(req,res)=>{


   const {email, password} = req.body
   
   try {

    const checkEmail = await User.findOne({email})

    if(!checkEmail){
    return res.status(404).json({message:'Invalid user credentials'})
   }

   const passmatch = await bcrypt.compare(password,checkEmail.password)

   if(!passmatch){

    return res.status(404).json({message:'Invalid user credentials'})
   }

   const token = generateToken(checkEmail._id)

   return res.status(200).json({message:'Login sucess', token, profile:checkEmail.name, uId:checkEmail._id})
    
   } catch (error) {
    
    return res.status(404).json({Error:error.message})

   }

   
}
//For user signup controller
export const signup=async(req, res)=>{
    const {name, email, password, profilePic}= req.body

    try {

        const user = await User.findOne({email})//check if email already exists

        if(!name || !email || !password){
            return res.status(404).json({Error:'All fields are required'})
        }

        if(user){
           return res.status(404).json({Error:'The user already exists. Please login'})
        }
        //bcrypt  plain password

        if(password.length<6){
            return res.status(404).json({Error:"Password must be minimum 6 characters"})
        }

        const hashedpassword = await bcrypt.hash(password,(10))

        const data = await User.create({name, email, password:hashedpassword, profilePic})

        if(!data){
            return res.status(404).json({Error:'Unable to create user'})
        }

        const token = generateToken(data._id)

        return res.status(200).json({message:'Account created sucessfully',token})

    } catch (error) {

        return res.status(404).json({"Error":Error.message})
        
    }
    
}

export const allUsers=async(req,res)=>{

     try {

        const data = await User.find({}).select('_id name') //need to add login to remove the current user

        if(!data){

            return res.status(200).json({Message:'No users available'})

        }

        return res.status(200).json(data)
        
    } catch (error) {

        return res.status(404).json({Error: 'Unable to fetch users'})
        
    }

}