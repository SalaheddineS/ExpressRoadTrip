import express from 'express';
import Controllers from './Controllers';
import Middlewares from './Middlewares';
class Server{
    private app;

    constructor(){
        this.app=express();
        this.middlewareConfig();
        this.controllerConfig();
    }

    private middlewareConfig(){
        this.app.use(express.json());
    }

    private controllerConfig(){
        this.app.use('/customer',Middlewares.JWTMiddlewares.isAuthenticated,Controllers.CustomerController);
        this.app.use('/auth',Controllers.AuthController);
    }


    public start(port:number){
        this.app.listen(port,()=>{console.log(`Road Trip Currently Running on localhost:${port}`)})
    }

    
}

export default Server;