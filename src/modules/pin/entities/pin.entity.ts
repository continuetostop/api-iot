import { IsString } from 'class-validator';
import { ArduinoEntity } from 'src/modules/arduino/entities/arduino.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pin')
export class PinEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', unique: true })
  @IsString()
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.pins)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @Column({ nullable: true, name: 'created_by' })
  createdById?: string;

  @ManyToMany(() => ArduinoEntity, (arduino) => arduino.pin)
  arduino: ArduinoEntity[];
}
