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

  public async getAllCars() {
    try {
      const allCars = await this.service.getAllCars();

      return this.res.status(200).json(allCars);
    } catch (err) {
      this.next(err);
    }
  }

  public async getCarById() {
    try {
      const resultCar = await this.service.getCarById(this.req.params.id);

      return this.res.status(200).json(resultCar);
    } catch (err) {
      this.next(err);
    }
  }
}
