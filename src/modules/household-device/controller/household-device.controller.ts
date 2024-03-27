import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HouseholdDeviceService } from '../service/household-device.service';
import { CreateHouseholdDeviceDto } from '../dto/create-household-device.dto';
import { UpdateHouseholdDeviceDto } from '../dto/update-household-device.dto';
import { CurrentUser } from 'src/@core/decorators/current-user.public';
import { IPayloadToken } from 'src/@share/interface';

@Controller('household-device')
export class HouseholdDeviceController {
  constructor(
    private readonly householdDeviceService: HouseholdDeviceService,
  ) {}

  @Post()
  create(
    @Body() createHouseholdDeviceDto: CreateHouseholdDeviceDto,
    @CurrentUser() user: IPayloadToken,
  ) {
    return this.householdDeviceService.create(createHouseholdDeviceDto, user);
  }

  @Get()
  findAll() {
    return this.householdDeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.householdDeviceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHouseholdDeviceDto: UpdateHouseholdDeviceDto,
  ) {
    return this.householdDeviceService.update(id, updateHouseholdDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.householdDeviceService.remove(id);
  }
}
function CurrentUserGuard(): (
  target: HouseholdDeviceController,
  propertyKey: 'create',
  parameterIndex: 1,
) => void {
  throw new Error('Function not implemented.');
}
