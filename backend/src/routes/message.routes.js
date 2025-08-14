
import express from "express"
import { chat, messanger } from "../controllers/message.controllers.js";


const messageRouter = express.Router()


messageRouter.post('/',chat)
messageRouter.get('/', messanger)



export default messageRouter;