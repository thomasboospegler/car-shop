import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import {
  motorcyclesArrayMock,
  createMotorcycleData,
  motorcycleMock,
} from '../Mocks/MotorcycleMocks';
import MotorcyclesService from '../../../src/Services/motorcycle.service';
import ErrorHandler from '../../../src/Utils/ErrorHandler';

const validId = '7429434f34c397abcde040c4';
const invalidId = 'xxxxxxxxxxx';

describe('MotorcyclesService', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('CreateMotorcycle', function () {
    it('Should create a motorcycle', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleMock);

      const service = new MotorcyclesService();
      const result = await service.createMotorcycle(createMotorcycleData);

      expect(result).to.be.deep.equal(motorcycleMock);
    });
  });

  describe('GetAllMotorcycles', function () {
    it('Should get all motorcycles', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesArrayMock);

      const service = new MotorcyclesService();
      const result = await service.getAllMotorcycles();

      expect(result).to.be.deep.equal(motorcyclesArrayMock);
    });
  });

  describe('GetMotorcycleById', function () {
    it('Should get a motorcycle by id', async function () {
      sinon.stub(Model, 'findOne').resolves(motorcycleMock);

      const service = new MotorcyclesService();
      const result = await service.getMotorcycleById(validId);

      expect(result).to.be.deep.equal(motorcycleMock);
    });
  
    it('Should give an error by search an unexisted motorcycle', async function () {
      sinon.stub(Model, 'findOne').resolves(false);

      try {
        const service = new MotorcyclesService();
        await service.getMotorcycleById(invalidId);
      } catch (error) {
        expect((error as ErrorHandler).message).to.equal('Motorcycle not found');
      }
    });
  });

  describe('UpdateMotorcycle', function () {
    it('Should give an error with unexisted id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(false);
  
      try {
        const service = new MotorcyclesService();
        await service.updateMotorcycle(invalidId, createMotorcycleData);
      } catch (error) {
        expect((error as ErrorHandler).message).to.equal('Motorcycle not found');
      }
    });

    it('Should update a motorcycle', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMock);
  
      const service = new MotorcyclesService();
      const result = await service.updateMotorcycle(validId, createMotorcycleData);
  
      expect(result).to.be.deep.equal(motorcycleMock);
    });
  });
});
