import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../Utils/ErrorHandler';

const validateId = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Verificar se tem o tamanhao do id do mongo (refatorar usando um regex para validar)
    if (id.length !== 24) throw new ErrorHandler(422, 'Invalid mongo id');

    next();
  } catch (err) {
    next(err);
  }
};

export default validateId;
