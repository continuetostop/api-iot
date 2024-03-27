import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinArduinoService } from '../service/pin-arduino.service';
import { CreatePinArduinoDto } from '../dto/create-pin-arduino.dto';
import { UpdatePinArduinoDto } from '../dto/update-pin-arduino.dto';
import { CurrentUser } from 'src/@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('pin-arduino')
export class PinArduinoController {
  constructor(private readonly pinArduinoService: PinArduinoService) {}

  @Post()
  create(
    @Body() createPinArduinoDto: CreatePinArduinoDto,
    @CurrentUser() userReq: IPayloadToken,
  ) {
    return this.pinArduinoService.create(createPinArduinoDto, userReq);
  }

  @Get()
  findAll() {
    return this.pinArduinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinArduinoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePinArduinoDto: UpdatePinArduinoDto,
  ) {
    return this.pinArduinoService.update(id, updatePinArduinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinArduinoService.remove(id);
  }
}
