import { Request, Router, Response, NextFunction } from 'express';
import MotorcyclesController from '../Controllers/motorcycles.controller';

const routers = Router();

routers.post(
  '/',
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).createMotorcycle(),
);

export default routers;
