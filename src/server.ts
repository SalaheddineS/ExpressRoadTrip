import * as dotenv from 'dotenv';
import express, { Express,Request, Response } from 'express';

//Initialize dotenv
dotenv.config();
//Initialize express
const app:Express = express();
//Initialize JSON parser Middleware
app.use(express.json());

app.listen(process.env.SERVER_PORT||3000, ()=>{console.log(`the Road Trip server is running on localhost:${process.env.SERVER_PORT||3000}`)});