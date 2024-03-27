import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import { UserEntity } from '../../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginInput, LoginOutput } from '../dto/login.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: RegisterDto) {
    const result = await this.userRepository.save(createUserDto);
    return result;
  }

  async login(loginDto: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepository.findOne({
      where: {
        email: loginDto.email,
      },
    });

    if (user.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    const payload: IPayloadToken = {
      sub: user.id,
      email: user.email,
      privileges: user.privileges,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken: accessToken,
    };
  }
}
