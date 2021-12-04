import { PartialType } from '@nestjs/swagger';
import { CreateRoomReservedDto } from './create-room-reserved.dto';

export class UpdateRoomReservedDto extends PartialType(CreateRoomReservedDto) {}
