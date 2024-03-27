import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/@core/guard/roles.guard';
import { AuthGuard } from 'src/@core/guard/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
