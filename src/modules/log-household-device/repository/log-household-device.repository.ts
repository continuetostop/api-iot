import { LogHouseholdDeviceEntity } from '../entities/log-household-device.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(LogHouseholdDeviceEntity)
export class LogHouseholdDeviceRepository extends Repository<LogHouseholdDeviceEntity> {}
