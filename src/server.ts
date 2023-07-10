import express, { Express,Request, Response } from 'express';

const app:Express = express();
const port=3000;

app.get('/',(req:Request,res:Response)=>
{
res.status(201).json({name:"Road",lastName:"Trip"});
}
)


app.listen(port,()=>{console.log("the Road Trip server is running")});