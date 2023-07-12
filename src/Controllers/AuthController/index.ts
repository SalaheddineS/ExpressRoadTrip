import Services from "../../Services";
import { Router } from "express";

const AuthController = Router();

AuthController.post('/login',Services.AuthService.authenticate);

export default AuthController;