import { IsString } from 'class-validator';
import { PinEntity } from 'src/modules/pin/entities/pin.entity';
import { ProjectEntity } from 'src/modules/project/entities/project.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('arduino')
export class ArduinoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  @IsString()
  id: string;

  @Column({ type: 'varchar', name: 'name', unique: true })
  @IsString()
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.arduinos)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity[];

  @Column({ nullable: true, name: 'created_by' })
  createdById?: string;

  @ManyToMany(() => PinEntity, (pin) => pin.arduino)
  pin: PinEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.arduino)
  projects: ProjectEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  async capitalizeName() {
    this.name = this.name.toUpperCase();
  }
}
