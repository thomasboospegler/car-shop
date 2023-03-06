import { Request, Router, Response, NextFunction } from 'express';
import MotorcyclesController from '../Controllers/motorcycles.controller';
import validateId from '../Middlewares/validateId';

const routers = Router();

routers.post(
  '/',
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).createMotorcycle(),
);

routers.get(
  '/',
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).getAllMotorcycles(),
);

routers.get(
  '/:id',
  validateId,
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).getMotorcycleById(),
);

routers.put(
  '/:id',
  validateId,
  (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => new MotorcyclesController(req, res, next).updateMotorcycle(),
);

export default routers;
