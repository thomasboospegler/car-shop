import express from 'express';
import carsRouters from './routers/cars.routers';
import motorcyclesRouters from './routers/motorcycles.routers';
import ErrorHandlerMiddleware from './Middlewares/ErrorHandlerMiddleware';

const app = express();

app.use(express.json());

app.use('/cars', carsRouters);

app.use('/motorcycles', motorcyclesRouters);

app.use(ErrorHandlerMiddleware.handleError);

export default app;
