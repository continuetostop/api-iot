import { IsBoolean, IsJSON, IsNumber, IsString } from 'class-validator';
import { LogHouseholdDeviceEntity } from 'src/modules/log-household-device/entities/log-household-device.entity';
import { ProjectEntity } from 'src/modules/project/entities/project.entity';
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

@Entity('household_device')
export class HouseholdDeviceEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  @IsString()
  name: string;

  @Column({ type: 'json', name: 'pins_usage', nullable: true })
  pinsUsage: JSON;

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

  @ManyToOne(() => ProjectEntity, (project) => project.householdDevices)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;

  @Column({ nullable: true, name: 'project_id' })
  projectId?: string;

  @OneToMany(
    () => LogHouseholdDeviceEntity,
    (logHouseholdDevice) => logHouseholdDevice.householdDevice,
  )
  logHouseholdDevices: LogHouseholdDeviceEntity[];
}
