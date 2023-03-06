import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { createCarBody, carMock, carsArrayMock } from '../Mocks/CarsMocks';
import CarsService from '../../../src/Services/cars.service';
import ErrorHandler from '../../../src/Utils/ErrorHandler';

const CAR_NOT_FOUND = 'Car not found';
const validId = '7429434f34c397abcde040c4';
const invalidId = 'xxxxxxxxxxx';

describe('CarsService', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('CreateCar', function () {
    it('Should create a car', async function () {
      sinon.stub(Model, 'create').resolves(carMock);
  
      const service = new CarsService();
      const result = await service.createCar(createCarBody);
  
      expect(result).to.be.deep.equal(carMock);
    });
  });

  describe('GetAllCars', function () {
    it('Should get all cars', async function () {
      sinon.stub(Model, 'find').resolves(carsArrayMock);
  
      const service = new CarsService();
      const result = await service.getAllCars();
  
      expect(result).to.be.deep.equal(carsArrayMock);
    });
  });

  describe('GetCarById', function () {
    it('Should get a car by id', async function () {
      sinon.stub(Model, 'findOne').resolves(carMock);
  
      const service = new CarsService();
      const result = await service.getCarById(validId);
  
      expect(result).to.be.deep.equal(carMock);
    });
  
    it('Should give an error by search an unexisted car', async function () {
      sinon.stub(Model, 'findOne').resolves(false);
  
      try {
        const service = new CarsService();
        await service.getCarById(invalidId);
      } catch (error) {
        expect((error as ErrorHandler).message).to.equal(CAR_NOT_FOUND);
      }
    });
  });
});
