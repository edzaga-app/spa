import { Request, Response, NextFunction, Router } from 'express';
import NotAuthorizedException from '../exceptions/notAuthorizedException';
import PostNotFoundException from '../exceptions/postNotFoundException';
import Auth from '../middlewares/auth';
import Route from "../models/route";;
import Customersrepository from '../repository/customer.repository';


class AuthController implements Route {
  path = '/auth';
  router = Router();
  className = 'AuthController';
  private customerRepository = new Customersrepository();
  private auth = new Auth();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/createtoken`, this.createToken);
  } 
  
  /**
   * Crea el token para los usuarios que tienen acceso
   * al spa
   * @param req Id del tercero que valida si tiene autorización
   * @param res Token encriptado
   * @param next Si no cumple con la validación lo dirige a la excepción
   */
  createToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      if (id) {
        const user = await this.customerRepository.getUser(id);
      }
       


      // if (id) {
      //   const user = await this.healthCalendarRepository.getUser(id);
      //   if (user?.thirdpartyId) {
      //     const token = this.auth.createToken({ id: user?.thirdpartyId });
      //     res.send(token); 
      //   } else {
      //     next(new NotAuthorizedException());
      //   }
      // } else {
      //   next(new PostNotFoundException(id));
      // }

    } catch (err) {
      console.error(`Error en ${this.className} => createToken`, err);
    }
  }

}

export default AuthController;