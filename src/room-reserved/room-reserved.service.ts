import { Injectable } from '@nestjs/common';
import { CreateRoomReservedDto } from './dto/create-room-reserved.dto';
import { UpdateRoomReservedDto } from './dto/update-room-reserved.dto';

@Injectable()
export class RoomReservedService {
  create(createRoomReservedDto: CreateRoomReservedDto) {
    return 'This action adds a new roomReserved';
  }

  findAll() {
    return `This action returns all roomReserved`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roomReserved`;
  }

  update(id: number, updateRoomReservedDto: UpdateRoomReservedDto) {
    return `This action updates a #${id} roomReserved`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomReserved`;
  }
}
