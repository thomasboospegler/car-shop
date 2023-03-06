import { 
  model, 
  Model, 
  models, 
  Schema,
  UpdateQuery,
} from 'mongoose';

export default abstract class AbstractModel<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }

  public async findById(_id: string): Promise<T | null> {
    const result = await this.model.findOne({ _id });
    return result;
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    const result = await this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    return result;
  }
}
