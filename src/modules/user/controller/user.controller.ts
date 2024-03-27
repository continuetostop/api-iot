import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { RolesGuard } from 'src/@core/guard/roles.guard';
import { Roles } from 'src/@core/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/@core/interceptor/logging.interceptor';
import { ERole } from 'src/@core/enum/role.enum';
import { AuthGuard } from 'src/@core/guard/auth.guard';
import { IsPublic } from 'src/@core/decorators/public.decorator';

@Controller('user')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  // @Roles(ERole.Admin)
  // @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.remove(id);
  }
}
