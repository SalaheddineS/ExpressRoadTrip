import JWTUtils from "../../Utils/JWTUtils";
import { Request, Response, NextFunction } from 'express';

const isAuthenticated = async (req:Request,res:Response,next:NextFunction) => {
    try
    {
        const JWT = req.headers.authorization;
        if(!JWT) throw new Error("JWT is required")
        JWTUtils.verifyToken(JWT)
        next();
    }
    catch(error)
    {
        console.log("Error authenticating customer:",error)
        throw error;
    }
    
}

export default {
    isAuthenticated,
}