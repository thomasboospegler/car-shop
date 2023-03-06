import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/motorcycle.service';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createMotorcycle() {    
    const motorcycleData: IMotorcycle = {
      ...this.req.body,
      status: this.req.body.status || false,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycleData);

      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    try {
      const allMotorcycles = await this.service.getAllMotorcycles();

      return this.res.status(200).json(allMotorcycles);
    } catch (err) {
      this.next(err);
    }
  }

  public async getMotorcycleById() {
    try {
      const resultMotorcycle = await this.service.getMotorcycleById(this.req.params.id);

      return this.res.status(200).json(resultMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async updateMotorcycle() {
    try {
      const result = await this.service.updateMotorcycle(this.req.params.id, this.req.body);
      
      return this.res.status(200).json(result);
    } catch (err) {
      this.next(err);
    }
  }
}
