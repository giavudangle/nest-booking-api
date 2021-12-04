import { Module } from '@nestjs/common';
import { RoomReservedService } from './room-reserved.service';
import { RoomReservedController } from './room-reserved.controller';

@Module({
  controllers: [RoomReservedController],
  providers: [RoomReservedService]
})
export class RoomReservedModule {}
