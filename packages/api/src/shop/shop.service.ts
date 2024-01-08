import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopService: Repository<Shop>,
  ) {}

  async create(createWebappDto: CreateShopDto, user_id: string) {
    const isExist = await this.shopService.findBy({
      user: { id: user_id },
      domain: createWebappDto.domain,
    });

    if (isExist.length) throw new BadRequestException('domain already exist');

    const newWebApp = {
      domain: createWebappDto.domain,
      user: {
        id: user_id,
      },
    };

    return await this.shopService.save(newWebApp);
  }

  async findAll(user_id: string) {
    return await this.shopService.find({
      where: {
        user: { id: user_id },
      },
      relations: {
        products: true,
      },
    });
  }
}
