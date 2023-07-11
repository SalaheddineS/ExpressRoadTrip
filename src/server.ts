import * as dotenv from 'dotenv';
import express, { Express,Request, Response } from 'express';

class Server{
    private app;

    constructor(){
        this.app=express();
        this.config();
    }

    private config(){
        this.app.use(express.json());
    }


    public start(port:number){
        this.app.listen(port,()=>{console.log(`Road Trip Currently Running on localhost:${port}`)})
    }
}

export default Server;