import { Request, Router, Response, NextFunction } from 'express';
import CarsController from '../Controllers/cars.controller';

const routers = Router();

routers.post(
  '/',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => new CarsController(req, res, next).createCar(),
);

export default routers;
