import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdDeviceController } from './household-device.controller';
import { HouseholdDeviceService } from '../service/household-device.service';

describe('HouseholdDeviceController', () => {
  let controller: HouseholdDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdDeviceController],
      providers: [HouseholdDeviceService],
    }).compile();

    controller = module.get<HouseholdDeviceController>(
      HouseholdDeviceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
