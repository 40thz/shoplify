import { IsInt, IsOptional, IsString } from 'class-validator';
import { Shop } from 'src/shop/entities/shop.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsInt()
  amount: number;

  @IsString()
  description: string;

  @IsOptional()
  shop: Shop;
}
