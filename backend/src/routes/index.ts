import { Router } from 'express';
import orderRouter from './order-router';
import userRouter from './user-router';

const Endpoints = Router();

Endpoints.use('/users', userRouter);
Endpoints.use('/orders', orderRouter);

export default Endpoints;
