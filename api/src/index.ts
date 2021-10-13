import './config/config';
import App from './app';
import AuthController from './controllers/auth.controller';
import CustomersController from './controllers/customers.controller';


const app = new App([
  new CustomersController(),
  new AuthController(),
]);

app.listen();
