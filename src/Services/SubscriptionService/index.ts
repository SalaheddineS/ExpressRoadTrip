import PrismaCli from "../../dbConfig/prismaSingleton";
import { Request, Response } from 'express';

const getSubscriptions = async (_:Request,res:Response) => {
    try{
        const allSubscriptions= await PrismaCli.Prisma.subscription.findMany();
        return res.status(200).json(allSubscriptions);
    }
    catch(error){
        console.log("Error getting subscriptions:",error)
        throw error;
    }
}

const addSubscription = async (req:Request,res:Response) => {
    try {
      const { name, price, description } = req.body;
      const subscription = await PrismaCli.Prisma.subscription.create({
        data: {
          name: name,
          price: price,
          description: description,
        }
      });
      return res.status(200).json(subscription);
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw error;
    }
  }

const removeSubscription = async (req:Request,res:Response) => {
    try{
        const id:number = parseInt(req.params.id);
        const subscription = await PrismaCli.Prisma.subscription.delete({
            where:{
                id:id
            }
        })
        return res.status(200).json(subscription);
    }
    catch(error){
        console.log("Error deleting subscription:",error)
        throw error;
    }
}

const updateSubscription = async (req:Request,res:Response)=>{
    try{
        const id:number = parseInt(req.params.id);
        const { name, price, description } = req.body;
        const subscription = await PrismaCli.Prisma.subscription.update({
        where:{
            id:id
        },
        data:{
            name:name,
            price:price,
            description:description
        }
        })
        return res.status(200).json(subscription);
    }
    catch(error){
        console.log("Error updating subscription:",error)
        throw error;
    }
    }

export default {
    getSubscriptions,
    addSubscription,
    removeSubscription,
    updateSubscription
}