import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import Auth from '../middlewares/auth';
import Route from "../models/route";

class CustomersController implements Route {
  public path = '/customers';
  public router = Router();
  private className = 'CustomersController';
  private authMiddleware = new Auth();

  constructor() {  }

  private initializeRoutes() {

  }


}

export default CustomersController;