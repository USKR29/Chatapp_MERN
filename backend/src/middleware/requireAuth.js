
import jwt from 'jsonwebtoken'

const requireAuth=async(req,res,next)=>{

    const {authorization} = req.header

    if(!authorization){
        return res.status(404).json({message:'Authorization is required'})
    }

    const token = authorization.split(' ')[1]

    if(!token){
        return res.status(404).json({message: 'Requires login'})
    }
    
    try {

       req.user = jwt.verify(token,process.env.SECRET_SIGN)//if its true we are attaching id with req

       next()
        
    } catch (error) {

        return res.status(404).json({Error:error})
        
    }

}

export default requireAuth;