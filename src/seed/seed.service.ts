import { Injectable } from '@nestjs/common';
import { OrdersService } from 'src/orders/orders.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly ordersService: OrdersService) {}
  async runSeed() {
    await this.insertNewOrders();

    return 'SEED EXECUTED';
  }

  private async insertNewOrders() {
    await this.ordersService.deleteAllOrders();

    const orders = initialData.orders;

    const insertPromises = [];

    orders.forEach((order) => {
      insertPromises.push(this.ordersService.create(order));
    });

    await Promise.all(insertPromises);
    return true;
  }
}
