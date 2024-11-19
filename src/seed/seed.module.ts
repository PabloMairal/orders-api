import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [OrdersModule],
})
export class SeedModule {}
