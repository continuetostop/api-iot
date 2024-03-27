import { Injectable } from '@nestjs/common';
import { CreatePinArduinoDto } from '../dto/create-pin-arduino.dto';
import { UpdatePinArduinoDto } from '../dto/update-pin-arduino.dto';
import { PinArduinoEntity } from '../entities/pin-arduino.entity';
import { PinArduinoRepository } from '../repository/pin-arduino.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class PinArduinoService {
  constructor(
    @InjectRepository(PinArduinoEntity)
    private readonly pinArduinoRepo: PinArduinoRepository,
  ) {}
  async create(
    createPinArduinoDto: CreatePinArduinoDto,
    userReq: IPayloadToken,
  ) {
    const data: CreatePinArduinoDto = Object.assign(createPinArduinoDto, {
      createdById: userReq.sub,
    });
    return this.pinArduinoRepo.save(data);
  }

  async findAll() {
    return this.pinArduinoRepo.find();
  }

  async findOne(id: string) {
    return this.pinArduinoRepo.find({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePinArduinoDto: UpdatePinArduinoDto) {
    const pinArduino = await this.pinArduinoRepo.findOne({
      where: {
        id,
      },
    });
    const data = Object.assign(pinArduino, updatePinArduinoDto);
    return this.pinArduinoRepo.update(id, data);
  }

  async remove(id: string) {
    const pinArduino = await this.pinArduinoRepo.findOne({
      where: {
        id,
      },
    });
    return this.pinArduinoRepo.remove(pinArduino);
  }
}
