import { Test, TestingModule } from '@nestjs/testing';
import { PinArduinoService } from './pin-arduino.service';

describe('PinArduinoService', () => {
  let service: PinArduinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinArduinoService],
    }).compile();

    service = module.get<PinArduinoService>(PinArduinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
