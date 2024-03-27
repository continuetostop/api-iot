import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseholdDeviceController } from './controller/household-device.controller';
import { HouseholdDeviceEntity } from './entities/household-device.entity';
import { HouseholdDeviceService } from './service/household-device.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseholdDeviceEntity])],
  controllers: [HouseholdDeviceController],
  providers: [HouseholdDeviceService],
})
export class DeviceHouseholdDeviceModule {}
