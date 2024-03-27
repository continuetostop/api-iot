import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IotDeviceService } from '../service/iot-device.service';
import { CreateIotDeviceDto } from '../dto/create-iot-device.dto';
import { UpdateIotDeviceDto } from '../dto/update-iot-device.dto';
import { CurrentUser } from '../../../@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('iot-device')
export class IotDeviceController {
  constructor(private readonly iotDeviceService: IotDeviceService) {}

  @Post()
  create(
    @Body() createIotDeviceDto: CreateIotDeviceDto,
    @CurrentUser() userReq: IPayloadToken,
  ) {
    return this.iotDeviceService.create(createIotDeviceDto, userReq);
  }

  @Get()
  findAll() {
    return this.iotDeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iotDeviceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIotDeviceDto: UpdateIotDeviceDto,
  ) {
    return this.iotDeviceService.update(id, updateIotDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iotDeviceService.remove(id);
  }
}
