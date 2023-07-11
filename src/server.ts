import express from 'express';
import PrismaCli from './dbConfig/prismaSingleton'
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

    public async getTest(){
        
        const getProfiles= await PrismaCli.Prisma.profile.findMany();
        console.log(getProfiles);
    }
}

export default Server;