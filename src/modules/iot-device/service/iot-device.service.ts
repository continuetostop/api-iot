import { Injectable } from '@nestjs/common';
import { CreateIotDeviceDto } from '../dto/create-iot-device.dto';
import { UpdateIotDeviceDto } from '../dto/update-iot-device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IotDeviceEntity } from '../entities/iot-device.entity';
import { IotDeviceRepository } from '../repository/iot-device.repository';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class IotDeviceService {
  constructor(
    @InjectRepository(IotDeviceEntity)
    private readonly iotDeviceRepo: IotDeviceRepository,
  ) {}
  async create(createIotDeviceDto: CreateIotDeviceDto, userReq: IPayloadToken) {

    const data = Object.assign(createIotDeviceDto, {
      createdById: userReq.sub,
    });

    const iotDevice = this.iotDeviceRepo.create(data);
    return this.iotDeviceRepo.save(iotDevice);
  }

  async findAll() {
    return this.iotDeviceRepo.find();
  }

  async findOne(id: string) {
    return this.iotDeviceRepo.findOne({ where: { id } });
  }

  async update(id: string, updateIotDeviceDto: UpdateIotDeviceDto) {
    const iotDevice = await this.iotDeviceRepo.findOne({ where: { id } });
    const data = Object.assign(iotDevice, updateIotDeviceDto);
    return this.iotDeviceRepo.update(id, data);
  }

  async remove(id: string) {
    const iotDevice = await this.iotDeviceRepo.findOne({ where: { id } });

    return await this.iotDeviceRepo.remove(iotDevice);
  }
}
