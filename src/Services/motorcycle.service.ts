import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';
import ErrorHandler from '../Utils/ErrorHandler';

export default class MotorcyclesService {
  private createDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const model = new MotorcycleModel();

    const newMotorcycle = await model.create(motorcycle);

    return this.createDomain(newMotorcycle);
  }

  public async getAllMotorcycles(): Promise<(Motorcycle | null)[]> {
    const model = new MotorcycleModel();

    const allMotorcycles = await model.find();

    return allMotorcycles.map((motorcycle) => this.createDomain(motorcycle));
  }

  public async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    const model = new MotorcycleModel();

    const motorcycle = await model.findById(id);

    if (!motorcycle) throw new ErrorHandler(404, 'Motorcycle not found');

    return this.createDomain(motorcycle);
  }
}
