import PrismaCli from "../../dbConfig/prismaSingleton";
import { Request,Response } from "express";

const getAllRoles = async (req:Request,res:Response) => {
    try 
    {
        const Roles = await PrismaCli.Prisma.role.findMany();
        return res.status(200).json({Roles});
    } 
    catch (error) 
    {
        console.log("Error getting all roles:", error);
        throw error;
    }
}

const createRole = async (req:Request,res:Response) => {
    try 
    {
        const {name,description} = req.body;
        const Role = await PrismaCli.Prisma.role.create({
            data:{
                name:name.toUpperCase(),
                description:description
            }
        });
        return res.status(200).json({Role});
    } 
    catch (error) 
    {
        console.log("Error creating role:", error);
        throw error;
    }
}

const updateRole = async (req:Request,res:Response) => {
    try 
    {
        const {id} = req.params;
        const {name,description} = req.body;
        const Role = await PrismaCli.Prisma.role.update({
            where:{
                id:parseInt(id)
            },
            data:{
                name:name.toUpperCase(),
                description:description
            }
        });
        return res.status(200).json({Role});
    } 
    catch (error) 
    {
        console.log("Error updating role:", error);
        throw error;
    }
}

const deleteRole = async (req:Request,res:Response) => {
    try 
    {
        const {id} = req.params;
        const Role = await PrismaCli.Prisma.role.delete({
            where:{
                id:parseInt(id)
            }
        });
        return res.status(200).json({Role});
    } 
    catch (error) 
    {
        console.log("Error deleting role:", error);
        throw error;
    }
}

export default {
    getAllRoles,
    createRole,
    updateRole,
    deleteRole
}