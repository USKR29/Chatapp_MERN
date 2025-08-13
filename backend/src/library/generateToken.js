
import jwt from 'jsonwebtoken'

const generateToken =({userid})=>{

return jwt.sign({userid},process.env.SECRET_SIGN,{expiresIn: '3d'})

}

export default generateToken;