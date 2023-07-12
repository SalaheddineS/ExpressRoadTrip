import { Router } from "express";
import Services from "../../Services";

const CustomerController = Router();

CustomerController.get('/getCustomers',Services.CustomerService.getCustomers);
CustomerController.post('/addCustomer',Services.CustomerService.addCustomer);
CustomerController.delete('/removeCustomer/:id',Services.CustomerService.removeCustomer);
CustomerController.put('/updateCustomer/:id',Services.CustomerService.updateCustomer);
CustomerController.put('/addTripToCustomer/:tripId/:customerId',Services.CustomerService.addTripToCustomer);
CustomerController.get('/getCustomerTrips/:customerId',Services.CustomerService.getCustomerTrips);

export default CustomerController;