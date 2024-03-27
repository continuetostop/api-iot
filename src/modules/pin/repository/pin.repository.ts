import { EntityRepository, Repository } from 'typeorm';
import { PinEntity } from '../entities/pin.entity';

@EntityRepository(PinEntity)
export class PinRepository extends Repository<PinEntity> {}
