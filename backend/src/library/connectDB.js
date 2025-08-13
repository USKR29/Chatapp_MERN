import { json } from 'express';
import mongoose from 'mongoose'

const connectDB =async()=>{
   try {

    const connnection = await mongoose.connect(process.env.MONG_URI)
    if(connnection){
        console.log('Database connected successfully')
    }
    
   } catch (error) {
    
    console.log('Failed to connect to DB',error.message)

   }
}

export default connectDB;