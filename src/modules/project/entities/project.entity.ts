import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ArduinoEntity } from 'src/modules/arduino/entities/arduino.entity';
import { HouseholdDeviceEntity } from 'src/modules/household-device/entities/household-device.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  @IsString()
  name: string;

  @Column({ type: 'varchar', name: 'description', nullable: false })
  @IsString()
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @Column({ nullable: true, name: 'created_by' })
  createdById?: string;

  @ManyToOne(() => ArduinoEntity, (arduino) => arduino.projects)
  @JoinColumn({ name: 'arduino_id' })
  arduino: ArduinoEntity;

  @Column({ nullable: true, name: 'arduino_id' })
  arduinoId?: string;

  @OneToMany(
    () => HouseholdDeviceEntity,
    (householdDevice) => householdDevice.createdBy,
  )
  householdDevices: HouseholdDeviceEntity[];
}
