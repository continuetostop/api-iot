import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LogHouseholdDeviceService } from '../service/log-household-device.service';
import { CreateLogHouseholdDeviceDto } from '../dto/create-log-household-device.dto';
import { CurrentUser } from '../../../@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('log-household-device')
export class LogHouseholdDeviceController {
  constructor(
    private readonly logHouseholdDeviceService: LogHouseholdDeviceService,
  ) {}

  @Post()
  create(
    @Body() createLogHouseholdDeviceDto: CreateLogHouseholdDeviceDto,
    @CurrentUser() userReq: IPayloadToken,
  ) {
    return this.logHouseholdDeviceService.create(
      createLogHouseholdDeviceDto,
      userReq,
    );
  }

  @Get()
  findAll() {
    return this.logHouseholdDeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logHouseholdDeviceService.findOne(id);
  }
}
