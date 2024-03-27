import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { PinEntity } from '../entities/pin.entity';
import { PinRepository } from '../repository/pin.repository';
import { CreatePinDto } from '../dto/create-pin.dto';
import { UpdatePinDto } from '../dto/update-pin.dto';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class PinService {
  constructor(
    @InjectRepository(PinEntity)
    private readonly pinRepo: PinRepository,
  ) {}
  async create(createPinDto: CreatePinDto, userReq: IPayloadToken) {
    const data: CreatePinDto = Object.assign(createPinDto, {
      createdById: userReq.sub,
    });
    return this.pinRepo.save(data);
  }

  async findAll() {
    return this.pinRepo.find();
  }

  async findOne(id: string) {
    return this.pinRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePinDto: UpdatePinDto) {
    const pin = await this.pinRepo.findOne({
      where: {
        id,
      },
    });
    const data = Object.assign(pin, updatePinDto);
    return this.pinRepo.update(id, data);
  }

  async remove(id: string) {
    const pin = await this.pinRepo.findOne({
      where: {
        id,
      },
    });
    return this.pinRepo.remove(pin);
  }
}
