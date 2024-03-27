import { Test, TestingModule } from '@nestjs/testing';
import { LogHouseholdDeviceController } from './log-household-device.controller';
import { LogHouseholdDeviceService } from '../service/log-household-device.service';

describe('LogHouseholdDeviceController', () => {
  let controller: LogHouseholdDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogHouseholdDeviceController],
      providers: [LogHouseholdDeviceService],
    }).compile();

    controller = module.get<LogHouseholdDeviceController>(
      LogHouseholdDeviceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
