import { GetUserOrders } from '@app/use-cases/orders/get-user-orders';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetUserOrdersBody } from '../dtos/get-user-orders-body';

export class OrderController {
  constructor(private getUserOrders: GetUserOrders) {}

  public findByUserId = async (req: Request, res: Response) => {
    const { userId }: GetUserOrdersBody = req.body;
    const { orders } = await this.getUserOrders.execute({ userId });
    return res.status(StatusCodes.OK).json(orders);
  };
}
