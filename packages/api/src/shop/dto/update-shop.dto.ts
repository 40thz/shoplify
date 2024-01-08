import { PartialType } from '@nestjs/mapped-types';
import { CreateShopDto } from './create-shop.dto';

export class UpdatShopDto extends PartialType(CreateShopDto) {}
