import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create({ email, password }: CreateUserDto) {
    const exitstUser = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (exitstUser) throw new BadRequestException('This email already exist');

    const user = await this.userRepository.save({
      email,
      password: await hash(password),
    });

    const token = this.jwtService.sign({
      email,
    });

    return { ...user, token };
  }

  async findOne(email: string, shops?: boolean) {
    if (!email) throw new BadRequestException('Email in not defined');

    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      relations: {
        shops,
      },
    });

    if (!user) throw new BadRequestException('There is no user with this email address');

    return user;
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id });
  }
}
