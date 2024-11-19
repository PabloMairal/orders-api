import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  page_size?: number;

  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page?: number;
}
