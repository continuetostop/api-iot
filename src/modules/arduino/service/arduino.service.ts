import { Injectable } from '@nestjs/common';
import { CreateArduinoDto } from '../dto/create-arduino.dto';
import { UpdateArduinoDto } from '../dto/update-arduino.dto';
import { ArduinoEntity } from '../entities/arduino.entity';
import { ArduinoRepository } from '../respository/arduino.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class ArduinoService {
  constructor(
    @InjectRepository(ArduinoEntity)
    private readonly arduinoRepo: ArduinoRepository,
  ) {}
  async create(createArduinoDto: CreateArduinoDto, userReq: IPayloadToken) {
    const data: CreateArduinoDto = Object.assign(createArduinoDto, {
      createdById: userReq.sub,
    });
    const arduino = await this.arduinoRepo.create(data);
    return await this.arduinoRepo.save(arduino);
  }

  async findAll() {
    return await this.arduinoRepo.find();
  }

  async findOne(id: string) {
    return await this.arduinoRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateArduinoDto: UpdateArduinoDto) {
    return await this.arduinoRepo.update(id, updateArduinoDto);
  }

  async remove(id: string) {
    const arduino = await this.arduinoRepo.findOne({
      where: {
        id: id,
      },
    });
    return await this.arduinoRepo.remove(arduino);
  }
}
