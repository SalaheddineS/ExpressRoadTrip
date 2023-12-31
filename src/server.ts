import express from 'express';
import Controllers from './Controllers';
import Middlewares from './Middlewares';
import {Request,Response} from 'express';
class Server{
    private app;

    constructor()
    {
        this.app=express();
        this.middlewareConfig();
        this.controllerConfig();
    }

    private middlewareConfig()
    {
        this.app.use(express.json());
    }

    private controllerConfig()
    {

        this.app.use('/subscription',Middlewares.JWTMiddlewares.isAuthenticated,Controllers.SubscriptionController);
        this.app.use('/trip',Middlewares.JWTMiddlewares.isAuthenticated,Controllers.TripController);
        this.app.use('/customer',Controllers.CustomerController);
        this.app.use('/role',Middlewares.JWTMiddlewares.isAuthenticated,Controllers.RoleController);
        this.app.use('/auth',Controllers.AuthController);
        this.app.use('/',(_:Request,res:Response)=>{res.send("<h1>Hello World</h1>")});
    }


    public start(port:number)
    {
        this.app.listen(port,()=>{console.log(`Road Trip Currently Running on localhost:${port}`)})
    }

    
}

export default Server;