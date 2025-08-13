import Messages from "../models/message.model.js";

//To send text message to sender
export const chat=async(req, res)=>{

    const{senderId, receiverId, text} = req.body;

    try {

        const message = await Messages.create({senderId, receiverId, text})

        return res.status(200).json({message:message.text})
        
    } catch (error) {

        return res.status(404).json({Error: error.message})
        
    }

}
// This below func will fetch particular conversation using id
export const messanger=async(req,res)=>{

    const {messageId} = req.params;

    try {

        const chats = await Messages.findOne({messageId}).select('text')

        return res.status(200).json({chats})
        
    } catch (error) {
        return res.status(500).json({Error: error,message})
    }

}