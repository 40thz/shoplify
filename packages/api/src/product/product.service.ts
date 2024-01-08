import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createWebappDto: CreateProductDto, shop_id: string) {
    const newProduct = {
      name: createWebappDto.name,
      amount: createWebappDto.amount,
      description: createWebappDto.description,
      shop: {
        id: shop_id,
      },
    };

    return await this.productRepository.save(newProduct);
  }

  async findAll(shop_id: string) {
    return await this.productRepository.find({
      where: {
        shop: {
          id: shop_id,
        },
      },
    });
  }
}
