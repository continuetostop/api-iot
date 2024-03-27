import { EntityRepository, Repository } from 'typeorm';
import { HouseholdDeviceEntity } from '../entities/household-device.entity';

@EntityRepository(HouseholdDeviceEntity)
export class HouseholdDeviceRepository extends Repository<HouseholdDeviceEntity> {}
