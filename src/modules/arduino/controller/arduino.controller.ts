import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArduinoService } from '../service/arduino.service';
import { CreateArduinoDto } from '../dto/create-arduino.dto';
import { UpdateArduinoDto } from '../dto/update-arduino.dto';
import { CurrentUser } from 'src/@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('arduino')
export class ArduinoController {
  constructor(private readonly arduinoService: ArduinoService) {}

  @Post()
  create(
    @Body() createArduinoDto: CreateArduinoDto,
    @CurrentUser() userReq: IPayloadToken,
  ) {
    return this.arduinoService.create(createArduinoDto, userReq);
  }

  @Get()
  findAll() {
    return this.arduinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arduinoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArduinoDto: UpdateArduinoDto) {
    return this.arduinoService.update(id, updateArduinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arduinoService.remove(id);
  }
}
