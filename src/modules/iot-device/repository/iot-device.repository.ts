import { EntityRepository, Repository } from 'typeorm';
import { IotDeviceEntity } from '../entities/iot-device.entity';
@EntityRepository(IotDeviceEntity)
export class IotDeviceRepository extends Repository<IotDeviceEntity> {}
