import express, { Express,Request, Response } from 'express';
import { Interface } from 'readline';

const app:Express = express();
const port=3000;
app.use(express.json());

interface User {
    name:string,
    age:Number
}

app.get('/',(req:Request,res:Response)=>
{
res.status(201).json({name:"Road",lastName:"Trip"});
}
)

app.post('/post',(req:Request,res:Response)=>
{
    const body:User = req.body
    const userInfo:User={name:body.name,age:body.age};
    res.status(201).json(userInfo);
}
)

app.listen(port,()=>{console.log("the Road Trip server is running")});