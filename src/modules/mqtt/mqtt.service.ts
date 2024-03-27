import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MqttService {
  constructor(@Inject('MQTT') private mqttClient: ClientProxy) {}

  publish(topic: string, message: any): Observable<any> {
    return this.mqttClient.send(topic, message);
  }

  subscribe(topic: string): Observable<any> {
    return new Observable((observer) => {
      this.mqttClient
        .send<any>({ cmd: 'subscribe' }, topic)
        .subscribe((data) => observer.next(data));
    });
  }
}
