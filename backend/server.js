import dotenv from 'dotenv'
dotenv.config()

import http, { createServer } from 'http'
import app from './app.js';

const port=process.env.PORT || 3000;

const server=createServer(app)

server.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
    
})