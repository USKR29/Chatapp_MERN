import 'dotenv/config.js'
import express from 'express';
import connectDB from './src/library/connectDB.js';
import router from './src/routes/auth.routes.js';
import messageRouter from './src/routes/message.routes.js';


const app = express();

app.use(express.json());

app.use('/api/auth',router);
app.use('/api/message',messageRouter);

app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log('Server is running')

})

