import { Test, TestingModule } from '@nestjs/testing';
import { LogHouseholdDeviceService } from './log-household-device.service';

describe('LogHouseholdDeviceService', () => {
  let service: LogHouseholdDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogHouseholdDeviceService],
    }).compile();

    service = module.get<LogHouseholdDeviceService>(LogHouseholdDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
