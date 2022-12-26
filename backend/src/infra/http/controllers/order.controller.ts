import { GetUserOrders } from '@app/use-cases/orders/get-user-orders';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class OrderController {
  constructor(private getUserOrders: GetUserOrders) {}

  public findByUserId = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const { orders } = await this.getUserOrders.execute({ userId });
    return res.status(StatusCodes.OK).json(orders);
  };
}
