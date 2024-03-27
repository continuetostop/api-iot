import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { IsPublic } from './@core/decorators';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MQTT') private mqttClient: ClientProxy,
  ) {}

  @IsPublic()
  @Get()
  async getHello(): Promise<{ message: string }> {
    await this.mqttClient.emit('ping', { message: 'pong' }).toPromise();
    return this.appService.getHello();
  }
}
