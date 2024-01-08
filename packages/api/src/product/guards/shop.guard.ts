import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

import { UserService } from 'src/user/user.service';

@Injectable()
export class ShopGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const shopId = req.params.shop_id;

    const userShops = await this.userService.findOne(req.user.email, true);
    const shopIds = userShops.shops.map((shop) => shop.id);

    if (!shopIds.includes(shopId))
      throw new BadRequestException(`Shop with id ${shopId} not found`);

    return true;
  }
}
