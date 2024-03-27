import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePinDto } from '../dto/create-pin.dto';
import { UpdatePinDto } from '../dto/update-pin.dto';
import { PinService } from '../service/pin.service';
import { IsPublic } from 'src/@core/decorators';
import { CurrentUser } from 'src/@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @Post()
  create(
    @Body() createPinDto: CreatePinDto,
    @CurrentUser() userReq: IPayloadToken,
  ) {
    return this.pinService.create(createPinDto, userReq);
  }

  @Get()
  findAll() {
    return this.pinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinDto: UpdatePinDto) {
    return this.pinService.update(id, updatePinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinService.remove(id);
  }
}
