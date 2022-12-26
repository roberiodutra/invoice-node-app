import { Order } from '../entities/order';

export abstract class OrderRepository {
  abstract findByUserId(userId: number): Promise<Order | null>;
}
