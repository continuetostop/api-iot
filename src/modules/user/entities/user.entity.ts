import { IsString } from 'class-validator';
import { ArduinoEntity } from 'src/modules/arduino/entities/arduino.entity';
import { HouseholdDeviceEntity } from 'src/modules/household-device/entities/household-device.entity';
import { IotDeviceEntity } from 'src/modules/iot-device/entities/iot-device.entity';
import { PinEntity } from 'src/modules/pin/entities/pin.entity';
import { ProjectEntity } from 'src/modules/project/entities/project.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'first_name', nullable: true })
  @IsString()
  firstName?: string;

  @Column({ type: 'varchar', name: 'last_name', nullable: true })
  @IsString()
  lastName?: string;

  @Column({ type: 'varchar', name: 'email', nullable: false, unique: true })
  @IsString()
  email: string;

  @Column({ type: 'varchar', name: 'password', nullable: false })
  @IsString()
  password: string;

  @Column({ type: 'varchar', name: 'privileges', nullable: true })
  @IsString()
  privileges: string;

  @OneToMany(
    () => HouseholdDeviceEntity,
    (householdDevice) => householdDevice.createdBy,
  )
  householdDevices: HouseholdDeviceEntity[];

  @OneToMany(() => IotDeviceEntity, (iotDevice) => iotDevice.createdBy)
  iotDevices: IotDeviceEntity[];

  @OneToMany(() => ArduinoEntity, (arduino) => arduino.createdBy)
  arduinos: ArduinoEntity[];

  @OneToMany(() => PinEntity, (pin) => pin.createdBy)
  pins: PinEntity[];

  @OneToMany(() => ProjectEntity, (projects) => projects.createdBy)
  projects: ProjectEntity[];
}
