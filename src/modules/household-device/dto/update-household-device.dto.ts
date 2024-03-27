import { PartialType } from '@nestjs/mapped-types';
import { CreateHouseholdDeviceDto } from './create-household-device.dto';

export class UpdateHouseholdDeviceDto extends PartialType(
  CreateHouseholdDeviceDto,
) {}
