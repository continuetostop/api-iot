import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsJSON,
  IsNumber,
  IsString,
} from 'class-validator';
import { HouseholdDeviceEntity } from 'src/modules/household-device/entities/household-device.entity';
import { ProjectEntity } from 'src/modules/project/entities/project.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('log_household_device')
export class LogHouseholdDeviceEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  @IsString()
  name: string;

  @Column({ type: 'bool', name: 'status', nullable: false })
  @IsBoolean()
  status: boolean;

  @Column({ type: 'json', name: 'value', nullable: true })
  @IsJSON()
  value: JSON;

  @ManyToOne(() => UserEntity, (user) => user.householdDevices)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @Column({ nullable: true, name: 'created_by' })
  createdById?: string;

  @ManyToOne(
    () => HouseholdDeviceEntity,
    (householdDevice) => householdDevice.logHouseholdDevices,
  )
  @JoinColumn({ name: 'household_device_id' })
  householdDevice: HouseholdDeviceEntity;

  @Column({ nullable: false, name: 'household_device_id' })
  householdDeviceId: string;
}
