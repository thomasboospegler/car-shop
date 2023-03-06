import { Request, Router, Response, NextFunction } from 'express';
import MotorcyclesController from '../Controllers/motorcycles.controller';

const routes = Router();

routes.post(
  '/',
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).createMotorcycle(),
);
