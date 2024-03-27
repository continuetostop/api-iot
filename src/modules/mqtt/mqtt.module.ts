// mqtt.module.ts
import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'MQTT',
        transport: Transport.MQTT,
        options: {
          url: process.env.MQTT_URL,
        },
      },
    ]),
  ],
  providers: [MqttService],
  exports: [ClientsModule, MqttService],
})
export class MqttModule {}
