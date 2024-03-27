import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: UserRepository,
  ) {}

  async findAll() {
    const users = await this.userRepo.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({
      where: {
        id: id,
      },
    });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update(id, updateUserDto);
   
    if (user.affected === 0) {
    }
    return { id: id };
  }

  async remove(id: string) {
    const user = await this.userRepo.findOne({
      where: {
        id: id,
      },
    });
    const result = await this.userRepo.remove(user);

    return { id };
  }
}
