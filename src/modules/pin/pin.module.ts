import { Module } from '@nestjs/common';
import { PinController } from './controller/pin.controller';
import { PinService } from './service/pin.service';
import { PinEntity } from './entities/pin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PinEntity])],
  controllers: [PinController],
  providers: [PinService],
})
export class PinModule {}
