import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

import { AuthGuard } from 'src/auth/auth.guard';
import { ShopGuard } from './guards/shop.guard';

@Controller('shop/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post(':shop_id')
  @UseGuards(AuthGuard, ShopGuard)
  @UsePipes(new ValidationPipe())
  create(
    @Param('shop_id') shop_id: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productService.create(createProductDto, shop_id);
  }

  @Get(':shop_id')
  @UseGuards(AuthGuard, ShopGuard)
  findAll(@Param('shop_id') shop_id: string) {
    return this.productService.findAll(shop_id);
  }
}
