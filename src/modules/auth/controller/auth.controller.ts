import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { IsPublic } from 'src/@core/decorators';
import { RegisterDto } from '../dto/register.dto';
import { LoginInput } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('register')
  create(@Body() createUserDto: RegisterDto) {
    return this.authService.create(createUserDto);
  }

  @IsPublic()
  @Post('login')
  login(@Body() loginDto: LoginInput) {
    return this.authService.login(loginDto);
  }
}
