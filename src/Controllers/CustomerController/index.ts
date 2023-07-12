import { Router } from "express";
import Services from "../../Services";
const CustomerController = Router();

CustomerController.get('/getCustomers',Services.CustomerService.getCustomers);
CustomerController.post('/addCustomer',Services.CustomerService.addCustomer);
CustomerController.delete('/removeCustomer/:id',Services.CustomerService.removeCustomer);
CustomerController.patch('/updateCustomer/:id',Services.CustomerService.updateCustomer);

export default CustomerController;