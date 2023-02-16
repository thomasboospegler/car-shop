import { Request, Response, NextFunction } from 'express';
import CarsService from '../Services/cars.service';
import ICar from '../Interfaces/ICar';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async createCar() {    
    const carData: ICar = {
      ...this.req.body,
      status: this.req.body.status || false,
    };

    try {
      const newCar = await this.service.createCar(carData);

      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }
}
