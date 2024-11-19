import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Status } from '../entities/order.entity';

export class FilterPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
