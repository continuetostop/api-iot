import { Module } from '@nestjs/common';
import { ArduinoService } from './service/arduino.service';
import { ArduinoController } from './controller/arduino.controller';
import { ArduinoEntity } from './entities/arduino.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArduinoEntity])],
  controllers: [ArduinoController],
  providers: [ArduinoService],
})
export class ArduinoModule {}
