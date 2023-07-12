import PrismaCli from "../../dbConfig/prismaSingleton";
import { Request, Response } from 'express';

const getTrips = async (_:Request,res:Response) => {
    try{
        const allTrips= await PrismaCli.Prisma.trip.findMany();
        return res.status(200).json(allTrips);
    }
    catch(error){
        console.log("Error getting trips:",error)
        throw error;
    }
}

const addTrip = async (req:Request,res:Response) => {
    try {
      const { name, price, description } = req.body;
      const trip = await PrismaCli.Prisma.trip.create({
        data: {
          name: name,
          price: price,
          description: description,
          Date :  new Date()
        }
      });
      return res.status(200).json(trip);
    } catch (error) {
      console.error('Error creating trip:', error);
      throw error;
    }
  }

const removeTrip = async (req:Request,res:Response) => {
    try{
        const id:number = parseInt(req.params.id);
        const trip = await PrismaCli.Prisma.trip.delete({
            where:{
                id:id
            }
        })
        return res.status(200).json(trip);
    }
    catch(error){
        console.log("Error deleting trip:",error)
        throw error;
    }
}

const updateTrip = async (req:Request,res:Response)=>{
    try{
        const id:number = parseInt(req.params.id);
        const { name, price, description } = req.body;
        const trip = await PrismaCli.Prisma.trip.update({
        where:{
            id:id
        },
        data:{
            name:name,
            price:price,
            description:description
        }
    })
    return res.status(200).json(trip);
    }
    catch(error){
        console.log("Error updating trip:",error)
        throw error;
    }
}

export default {
    getTrips,
    addTrip,
    removeTrip,
    updateTrip
}