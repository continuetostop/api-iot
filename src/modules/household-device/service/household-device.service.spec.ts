import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdDeviceService } from './household-device.service';

describe('DeviceService', () => {
  let service: HouseholdDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdDeviceService],
    }).compile();

    service = module.get<HouseholdDeviceService>(HouseholdDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
