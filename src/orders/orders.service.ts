import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { FilterPaginationDto } from './dto/filterPagination.dto';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger('ProductsService');

  private errorExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = this.orderRepository.create(createOrderDto);
      await this.orderRepository.save(order);

      return order;
    } catch (error) {
      return this.errorExceptions(error);
    }
  }

  async findAll(filterPaginationDto: FilterPaginationDto) {
    const { status, page = 1, page_size = 10 } = filterPaginationDto;

    const queryBuilder = this.orderRepository.createQueryBuilder('order');

    if (status) {
      queryBuilder.andWhere('order.status = :status', { status });
    }

    queryBuilder.skip((page - 1) * page_size).take(page_size);

    return await queryBuilder.getMany();
  }

  async findOne(id: string) {
    let order;
    try {
      order = await this.orderRepository.findOneBy({ id });
    } catch (error) {
      this.errorExceptions(error);
    }
    if (!order) throw new NotFoundException(`Product with id ${id} not found`);
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.preload({ id, ...updateOrderDto });

    if (!order) throw new NotFoundException(`Product with id ${id} not found`);

    await this.orderRepository.save(order);

    return order;
  }

  async remove(id: string) {
    const order = await this.findOne(id);

    await this.orderRepository.delete(order.id);
  }
  async deleteAllOrders() {
    const query = this.orderRepository.createQueryBuilder('order');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.errorExceptions(error);
    }
  }
}
