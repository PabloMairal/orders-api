import { Status } from 'src/orders/entities/order.entity';
import { v4 as uuid } from 'uuid';

interface SeedOrder {
  id: string;
  customer_name: string;
  item: string;
  quantity: number;
  status?: Status;
}

interface SeedData {
  orders: SeedOrder[];
}

export const initialData: SeedData = {
  orders: [
    {
      id: uuid(),
      customer_name: 'John Doe',
      item: 'Pepperoni Pizza',
      quantity: 2,
    },
    {
      id: uuid(),
      customer_name: 'Jane Smith',
      item: 'Cheeseburger with Fries',
      quantity: 1,
      status: Status.PENDING,
    },
    {
      id: uuid(),
      customer_name: 'Alex Johnson',
      item: 'Vegan Burrito',
      quantity: 3,
      status: Status.CANCELLED,
    },
    {
      id: uuid(),
      customer_name: 'Emily Davis',
      item: 'Caesar Salad',
      quantity: 1,
      status: Status.COMPLETED,
    },
    {
      id: uuid(),
      customer_name: 'Michael Brown',
      item: 'Spaghetti Carbonara',
      quantity: 2,
      status: Status.PENDING,
    },
    {
      id: uuid(),
      customer_name: 'Sophia Williams',
      item: 'Chicken Tikka Masala',
      quantity: 2,
      status: Status.COMPLETED,
    },
    {
      id: uuid(),
      customer_name: 'Liam Garcia',
      item: 'Fish and Chips',
      quantity: 1,
      status: Status.PENDING,
    },
    {
      id: uuid(),
      customer_name: 'Olivia Martinez',
      item: 'BBQ Ribs',
      quantity: 3,
      status: Status.CANCELLED,
    },
    {
      id: uuid(),
      customer_name: 'James Brown',
      item: 'Vegetable Stir Fry',
      quantity: 2,
      status: Status.PENDING,
    },
    {
      id: uuid(),
      customer_name: 'Isabella Rodriguez',
      item: 'Mushroom Risotto',
      quantity: 1,
      status: Status.COMPLETED,
    },
  ],
};
