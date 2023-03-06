const createMotorcycleData = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleMock = {
  id: '7429434f34c397abcde040c4',
  ...createMotorcycleData,
};

const motorcyclesArrayMock = [
  motorcycleMock,
  {
    id: '7429434f34c397abcde040c4',
    model: 'CB 1000',
    year: 2020,
    color: 'Red',
    status: false,
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export {
  createMotorcycleData,
  motorcycleMock,
  motorcyclesArrayMock,
};
