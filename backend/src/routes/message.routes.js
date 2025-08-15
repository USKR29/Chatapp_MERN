
import express from "express"
import { chat, messanger } from "../controllers/message.controllers.js";
import requireAuth from "../middleware/requireAuth.js";


const messageRouter = express.Router()


messageRouter.post('/', requireAuth, chat)
messageRouter.get('/', messanger)



export default messageRouter;