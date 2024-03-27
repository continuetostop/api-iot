import { Module } from '@nestjs/common';
import { LogHouseholdDeviceService } from './service/log-household-device.service';
import { LogHouseholdDeviceController } from './controller/log-household-device.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogHouseholdDeviceEntity } from './entities/log-household-device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogHouseholdDeviceEntity])],
  controllers: [LogHouseholdDeviceController],
  providers: [LogHouseholdDeviceService],
})
export class LogHouseholdDeviceModule {}
