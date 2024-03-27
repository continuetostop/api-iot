import { Test, TestingModule } from '@nestjs/testing';
import { PinArduinoController } from './pin-arduino.controller';
import { PinArduinoService } from '../service/pin-arduino.service';

describe('PinArduinoController', () => {
  let controller: PinArduinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinArduinoController],
      providers: [PinArduinoService],
    }).compile();

    controller = module.get<PinArduinoController>(PinArduinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
