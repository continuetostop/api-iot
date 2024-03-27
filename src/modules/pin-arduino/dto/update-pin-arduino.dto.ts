import { PartialType } from '@nestjs/mapped-types';
import { CreatePinArduinoDto } from './create-pin-arduino.dto';

export class UpdatePinArduinoDto extends PartialType(CreatePinArduinoDto) {}
