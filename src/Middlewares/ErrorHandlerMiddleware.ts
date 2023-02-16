import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../Utils/ErrorHandler';

export default class ErrorMiddleware extends Error {
  public static handleError(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (error instanceof ErrorHandler) {
      return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
}
