import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateShopDto {
  @IsNotEmpty()
  domain: string;

  @IsOptional()
  user: User;
}
