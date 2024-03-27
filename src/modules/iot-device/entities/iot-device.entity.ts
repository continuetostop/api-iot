import {
  IsString,
  IsBoolean,
  IsNumber,
  IsArray,
  ArrayMinSize,
  ArrayNotEmpty,
} from 'class-validator';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';

@Entity('iot_device')
export class IotDeviceEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  @IsString()
  name: string;

  @Column({ type: 'varchar', name: 'description', nullable: true })
  @IsBoolean()
  description: string;

  @Column({ type: 'jsonb', name: 'pins_info', nullable: true })
  @IsArray()
  pinsInfo: string[];

  @Column({ type: 'int', name: 'type', nullable: false })
  @IsBoolean()
  type: number;

  @ManyToOne(() => UserEntity, (user) => user.iotDevices)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @Column({ nullable: true, name: 'created_by' })
  createdById?: string;
}
