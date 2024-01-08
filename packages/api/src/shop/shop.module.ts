import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { WebappController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Shop]), JwtModule],
  controllers: [WebappController],
  providers: [ShopService],
})
export class ShopModule {}
