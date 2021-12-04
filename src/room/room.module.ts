import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomType } from '../room-type/entities/room-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RoomType])],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
