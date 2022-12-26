import { GetUser } from '@app/use-cases/users/get-user';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class UserController {
  constructor(private getUser: GetUser) {}

  public findByEmail = async (req: Request, res: Response) => {
    const { email } = req.body;
    const { user } = await this.getUser.execute({ email });
    return res.status(StatusCodes.OK).json(user);
  };
}
