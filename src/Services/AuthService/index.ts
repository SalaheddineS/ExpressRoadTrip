import PrismaCli from "../../dbConfig/prismaSingleton"
import bcrypt from "bcrypt"
import JWTUtils from "../../Utils/JWTUtils"
import { Request, Response } from 'express';

const authenticate = async (req:Request,res:Response) => {
    try
    {
    
    const {email,password} = req.body;
    if(!email || !password) throw new Error("Email and Password are required");

    const Customer = await PrismaCli.Prisma.customer.findUnique
    (
        {
            where: 
            {
                email: email
            },
            include:
            {
                roles: true
            }
        }
    )
    if(!Customer) throw new Error("Customer not found")

    const isPasswordValid = await bcrypt.compare(password, Customer.password)
    if(!isPasswordValid) throw new Error("Invalid Password")
    
    const payload = {id: Customer.id, email: Customer.email, name: Customer.name, roles: Customer.roles}
    const JWT = JWTUtils.generateJWT(payload)
    return res.status(200).json({JWT:JWT});

    }
    catch(error)
    {
        console.log("Error authenticating customer:",error)
        throw error;
    }
    
}

export default {
    authenticate,
}