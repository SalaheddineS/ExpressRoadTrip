import PrismaCli from "../../dbConfig/prismaSingleton";
import { Customer } from "@prisma/client";
import { Request, Response } from "express";
import passwordHasher from "../../Utils/passwordHasher";
const addCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, address, password } = req.body;
    const hashedPassword = await passwordHasher(password);
    const customer = await PrismaCli.Prisma.customer.create({
      data: {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        password: hashedPassword,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

const getCustomers = async (_: Request, res: Response) => {
  try {
    const allCustomers = await PrismaCli.Prisma.customer.findMany({
      include: {
        trips: true,
        subscriptions: true,
        roles: true,
      },
    });
    return res.status(200).json(allCustomers);
  } catch (error) {
    console.log("Error getting customers:", error);
    throw error;
  }
};

const removeCustomer = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const customer: Customer = await PrismaCli.Prisma.customer.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error deleting customer:", error);
    throw error;
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    if(!id) return res.status(400).json({message:"Invalid id"});
    const { name, email, mobile, address, password } = req.body;
    const hashedPassword = await passwordHasher(password);
    const customer: Customer = await PrismaCli.Prisma.customer.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        password: hashedPassword,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error updating customer:", error);
    throw error;
  }
};

const addTripToCustomer = async (req: Request, res: Response) => {
  const tripId = req.params.tripId;
  const customerId = req.params.customerId;
  if (!tripId || !customerId)
    return res.status(400).json({ message: "Invalid tripId or customerId" });
  try {
    const customer = await PrismaCli.Prisma.customer.update({
      where: {
        id: parseInt(customerId),
      },
      data: {
        trips: {
          connect: {
            id: parseInt(tripId),
          },
        },
      },
      include: {
        trips: true,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error adding trip to customer:", error);
    throw error;
  }
};

const getCustomerTrips = async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  if (!customerId)
    return res.status(400).json({ message: "Invalid customerId" });
  try {
    const customer = await PrismaCli.Prisma.customer.findUnique({
      where: {
        id: parseInt(customerId),
      },
      include: {
        trips: true,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error getting customer trips:", error);
    throw error;
  }
};

const addSubscriptionToCustomer = async (req: Request, res: Response) => {
  const subscriptionId = req.params.subscriptionId;
  const customerId = req.params.customerId;
  if (!subscriptionId || !customerId)
    return res
      .status(400)
      .json({ message: "Invalid subscriptionId or customerId" });
  try {
    const customer = await PrismaCli.Prisma.customer.update({
      where: {
        id: parseInt(customerId),
      },
      data: {
        subscriptions: {
          connect: {
            id: parseInt(subscriptionId),
          },
        },
      },
      include: {
        subscriptions: true,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error adding subscription to customer:", error);
    throw error;
  }
};

const assignRoleToCustomer = async (req: Request, res: Response) => {
  const customerId = req.params.customerId;
  const roleId = req.params.roleId;
  if (!customerId || !roleId) return res.status(400).json({ message: "Invalid customerId or roleId" }); 
  try {
    const customer = await PrismaCli.Prisma.customer.update({
      where: {
        id: parseInt(customerId),
      },
      data: {
        roles: {
          connect: {
            id: parseInt(roleId),
          },
        },
      },
      include: {
        roles: true,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    console.log("Error assigning role to customer:", error);
    throw error;
  }
};

export default {
  addCustomer,
  getCustomers,
  removeCustomer,
  updateCustomer,
  addTripToCustomer,
  getCustomerTrips,
  addSubscriptionToCustomer,
  assignRoleToCustomer,
};
