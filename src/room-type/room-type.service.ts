import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomType } from './entities/room-type.entity';

@Injectable()
export class RoomTypeService {
  constructor(
    @InjectRepository(RoomType) private readonly roomTypeRepository : Repository<RoomType>
  ){}

  async create(createRoomTypeDto: CreateRoomTypeDto) {
    const newRoom =  this.roomTypeRepository.create(createRoomTypeDto)
    await this.roomTypeRepository.save(newRoom)
    return newRoom;
  }

  async findAll() {
    return await this.roomTypeRepository.find({});
  }

  async findOne(id: number) {
    return await this.roomTypeRepository.findOne(id);
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return `This action updates a #${id} roomType`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomType`;
  }
}
