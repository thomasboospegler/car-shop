import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarsService {
  private createDomain(car: ICar | null): Car | null {
    return car ? new Car(car) : null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const model = new CarModel();

    const newCar = await model.create(car);
  
    return this.createDomain(newCar);
  }
}
