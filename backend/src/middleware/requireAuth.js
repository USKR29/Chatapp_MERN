
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const requireAuth=async(req,res,next)=>{

    const {authorization} = req.headers

    if(!authorization){
        return res.status(404).json({message:'Authorization is required'})
    }

    const token = authorization.split(' ')[1]

    if(!token){
        return res.status(404).json({message: 'Requires login'})
    }
    
    try {

       const{_id} = jwt.verify(token,process.env.SECRET_SIGN)//if its true we will get user id
       req.user = await User.findOne({_id}).select('_id')
       next()
        
    } catch (error) {

        return res.status(404).json({Error:error})
        
    }

}

export default requireAuth;