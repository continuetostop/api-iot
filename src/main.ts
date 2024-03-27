import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './@core/decorators/validation.pipe';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: process.env.MQTT_URL,
    },
  });
  await app.startAllMicroservices();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
