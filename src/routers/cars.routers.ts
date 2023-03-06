import { Request, Router, Response, NextFunction } from 'express';
import CarsController from '../Controllers/cars.controller';
import validateId from '../Middlewares/validateId';

const routers = Router();

routers.post(
  '/',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => new CarsController(req, res, next).createCar(),
);

routers.get(
  '/',
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new CarsController(req, res, next).getAllCars(),
);

routers.get(
  '/:id',
  validateId,
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new CarsController(req, res, next).getCarById(),
);

routers.put(
  '/:id',
  validateId,
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new CarsController(req, res, next).updateCar(),
);

export default routers;
