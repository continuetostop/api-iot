import { Module } from '@nestjs/common';
import { IotDeviceService } from './service/iot-device.service';
import { IotDeviceController } from './controller/iot-device.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotDeviceEntity } from './entities/iot-device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IotDeviceEntity])],
  controllers: [IotDeviceController],
  providers: [IotDeviceService],
})
export class IotDeviceModule {}
