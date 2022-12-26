import { Router } from 'express';
import userRouter from './user-router';

const Endpoints = Router();

Endpoints.use('/users', userRouter);

export default Endpoints;
