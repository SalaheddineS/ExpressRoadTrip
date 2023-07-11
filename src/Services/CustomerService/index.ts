import PrismaCli from "../../dbConfig/prismaSingleton";
import { Customer } from '@prisma/client'
import { Request, Response } from 'express';

const addCustomer = async (req:Request,res:Response) => {
    try {
      const { name, email, mobile, address, password } = req.body;
      const customer = await PrismaCli.Prisma.customer.create({
        data: {
          name: name,
          email: email,
          mobile: mobile,
          address: address,
          password: password,
        }
      });
      return res.status(200).json(customer);
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  };

const getCustomers = async (_:Request,res:Response) => {
    try{
        const allCustomers= await PrismaCli.Prisma.customer.findMany();
        return res.status(200).json(allCustomers);
    }
    catch(error){
        console.log("Error getting customers:",error)
        throw error;
    }
}

export default {
    addCustomer,
    getCustomers
}
  
