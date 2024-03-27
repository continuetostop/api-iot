import { Module } from '@nestjs/common';
import { PinArduinoController } from './controller/pin-arduino.controller';
import { PinArduinoService } from './service/pin-arduino.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinArduinoEntity } from './entities/pin-arduino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PinArduinoEntity])],
  controllers: [PinArduinoController],
  providers: [PinArduinoService],
})
export class PinArduinoModule {}
