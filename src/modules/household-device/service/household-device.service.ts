import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IPayloadToken } from 'src/@share/interface';
import { CreateHouseholdDeviceDto } from '../dto/create-household-device.dto';
import { UpdateHouseholdDeviceDto } from '../dto/update-household-device.dto';
import { HouseholdDeviceEntity } from '../entities/household-device.entity';
import { HouseholdDeviceRepository } from '../respository/household-device.respository';

@Injectable()
export class HouseholdDeviceService {
  constructor(
    @InjectRepository(HouseholdDeviceEntity)
    private readonly householdDeviceRepo: HouseholdDeviceRepository,
  ) {}

  async create(
    createHouseholdDeviceDto: CreateHouseholdDeviceDto,
    user: IPayloadToken,
  ) {
    const data = Object.assign(createHouseholdDeviceDto, {
      createdById: user.sub,
    });
    const device = await this.householdDeviceRepo.save(data);
    return device;
  }

  async findAll() {
    const devices = await this.householdDeviceRepo.find();
    return devices;
  }

  async findOne(id: string) {
    const device = await this.householdDeviceRepo.findOne({
      where: {
        id: id,
      },
    });
    return device;
  }

  async update(id: string, updateHouseholdDeviceDto: UpdateHouseholdDeviceDto) {
    const device = await this.householdDeviceRepo.update(
      id,
      updateHouseholdDeviceDto,
    );
    return device;
  }

  async remove(id: string) {
    const data = await this.householdDeviceRepo.findOne({
      where: {
        id: id,
      },
    });

    const device = await this.householdDeviceRepo.remove(data);
    return device;
  }
}
