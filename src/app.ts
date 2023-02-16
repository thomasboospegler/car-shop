import express from 'express';
import carsRouters from './routers/cars.routers';

const app = express();

app.use(express.json());

app.use('/cars', carsRouters);

export default app;
