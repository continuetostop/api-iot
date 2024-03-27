import { Injectable } from '@nestjs/common';
import { CreateLogHouseholdDeviceDto } from '../dto/create-log-household-device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LogHouseholdDeviceEntity } from '../entities/log-household-device.entity';
import { LogHouseholdDeviceRepository } from '../repository/log-household-device.repository';
import { IPayloadToken } from 'src/@share/interface';

@Injectable()
export class LogHouseholdDeviceService {
  constructor(
    @InjectRepository(LogHouseholdDeviceEntity)
    private readonly logHouseholdDeviceRepo: LogHouseholdDeviceRepository,
  ) {}
  async create(
    createLogHouseholdDeviceDto: CreateLogHouseholdDeviceDto,
    userReq: IPayloadToken,
  ) {
    const data = Object.assign(createLogHouseholdDeviceDto, {
      createdById: userReq.sub,
    });
    const logHouseholdDevice = await this.logHouseholdDeviceRepo.create(data);
    return this.logHouseholdDeviceRepo.save(logHouseholdDevice);
  }

  async findAll() {
    return this.logHouseholdDeviceRepo.find();
  }

  async findOne(id: string) {
    const logHouseholdDevice = await this.logHouseholdDeviceRepo.findOne({
      where: {
        id,
      },
    });
    return logHouseholdDevice;
  }
}
