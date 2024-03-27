import { EntityRepository, Repository } from 'typeorm';
import { ArduinoEntity } from '../entities/arduino.entity';

@EntityRepository(ArduinoEntity)
export class ArduinoRepository extends Repository<ArduinoEntity> {}
