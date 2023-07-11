import { Router } from "express";
import Services from "../../Services";
const CustomerController = Router();

CustomerController.get('/getCustomers',Services.CustomerService.getCustomers);
CustomerController.post('/addCustomer',Services.CustomerService.addCustomer);

export default CustomerController;