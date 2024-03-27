import { IsString } from 'class-validator';
import { ArduinoEntity } from 'src/modules/arduino/entities/arduino.entity';
import { PinEntity } from 'src/modules/pin/entities/pin.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pin_arduino')
export class PinArduinoEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @ManyToOne(() => PinEntity, (pin) => pin.arduino)
  @JoinColumn({ name: 'pin_id' })
  pin: PinEntity;

  @ManyToOne(() => ArduinoEntity, (arduino) => arduino.pin, { nullable: false })
  @JoinColumn({ name: 'arduino_id' })
  arduino: ArduinoEntity;

  @Column({ type: 'varchar', name: 'value' })
  @IsString()
  value: string;
}
