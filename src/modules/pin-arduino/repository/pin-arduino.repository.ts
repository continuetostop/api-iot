import { EntityRepository, Repository } from 'typeorm';
import { PinArduinoEntity } from '../entities/pin-arduino.entity';

@EntityRepository(PinArduinoEntity)
export class PinArduinoRepository extends Repository<PinArduinoEntity> {}
