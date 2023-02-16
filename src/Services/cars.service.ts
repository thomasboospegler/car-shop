import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';
import ErrorHandler from '../Utils/ErrorHandler';

export default class CarsService {
  private createDomain(car: ICar | null): Car | null {
    return car ? new Car(car) : null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const model = new CarModel();

    const newCar = await model.create(car);
  
    return this.createDomain(newCar);
  }

  public async getAllCars(): Promise<(Car | null)[]> {
    const model = new CarModel();

    const allCars = await model.find();

    return allCars.map((car) => this.createDomain(car));
  }

  public async getCarById(id: string): Promise<Car | null> {
    const model = new CarModel();

    const car = await model.findById(id);

    if (!car) throw new ErrorHandler(404, 'Car not found');

    return this.createDomain(car);
  }
}
