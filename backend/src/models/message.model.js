import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    text:{
        type: String
    }

},{timestamps: true})

const Messages = mongoose.model('Messages',messageSchema)

export default Messages;