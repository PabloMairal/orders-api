import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Status } from '../entities/order.entity';

export class CreateOrderDto {
  @IsString()
  @MinLength(1)
  customer_name: string;

  @IsString()
  @MinLength(1)
  item: string;

  @IsInt()
  quantity: number;

  @IsEnum(Status, {
    message: `Status must be one of the following: ${Object.values(Status).join(', ')}`,
  })
  @IsOptional()
  status?: Status;
}
