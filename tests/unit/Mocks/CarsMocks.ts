const createCarBody = {
  model: 'Opala',
  year: 2000,
  color: 'White',
  status: true,
  buyValue: 5.090,
  doorsQty: 4,
  seatsQty: 5,
};

const carMock = {
  id: '7429434f34c397abcde040c4',
  ...createCarBody,
};

const carsArrayMock = [
  carMock,
  {
    id: '7777777f34c397abcad040b2',
    model: 'Opala',
    year: 2000,
    color: 'White',
    status: true,
    buyValue: 5.090,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export {
  createCarBody,
  carMock,
  carsArrayMock,
};
