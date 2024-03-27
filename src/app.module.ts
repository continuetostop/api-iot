import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './@core/middleware/logger.middleware';
import { UserEntity } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DeviceHouseholdDeviceModule } from './modules/household-device/household-device.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './@core/guard/roles.guard';
import { AuthGuard } from './@core/guard/auth.guard';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { HouseholdDeviceEntity } from './modules/household-device/entities/household-device.entity';
import { ArduinoModule } from './modules/arduino/arduino.module';
import { PinModule } from './modules/pin/pin.module';
import { ProjectModule } from './modules/project/project.module';
import { PinArduinoModule } from './modules/pin-arduino/pin-arduino.module';
import { PinEntity } from './modules/pin/entities/pin.entity';
import { ArduinoEntity } from './modules/arduino/entities/arduino.entity';
import { PinArduinoEntity } from './modules/pin-arduino/entities/pin-arduino.entity';
import { IotDeviceModule } from './modules/iot-device/iot-device.module';
import { IotDeviceEntity } from './modules/iot-device/entities/iot-device.entity';
import { ProjectEntity } from './modules/project/entities/project.entity';
import { ConfigModule } from '@nestjs/config';
import { LogHouseholdDeviceModule } from './modules/log-household-device/log-household-device.module';
import { LogHouseholdDeviceEntity } from './modules/log-household-device/entities/log-household-device.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE_NAME,
      entities: [
        UserEntity,
        HouseholdDeviceEntity,
        PinEntity,
        ArduinoEntity,
        PinArduinoEntity,
        IotDeviceEntity,
        ProjectEntity,
        LogHouseholdDeviceEntity,
      ],
      synchronize: true,
    }),
    MqttModule,
    UserModule,
    AuthModule,
    DeviceHouseholdDeviceModule,
    ArduinoModule,
    PinModule,
    ProjectModule,
    PinArduinoModule,
    IotDeviceModule,
    LogHouseholdDeviceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
