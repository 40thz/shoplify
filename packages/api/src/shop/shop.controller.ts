import { Controller, Get, Post, Body, UseGuards, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shop')
export class WebappController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createWebappDto: CreateShopDto, @Req() req) {
    return this.shopService.create(createWebappDto, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Req() req) {
    return this.shopService.findAll(req.user.id);
  }
}
