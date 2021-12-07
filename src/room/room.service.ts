import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FacilityService } from '../facility/facility.service';
import { HotelService } from '../hotel/hotel.service';
import { RoomTypeService } from '../room-type/room-type.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {

  constructor(
    @InjectRepository(Room) private readonly roomRepository : Repository<Room>,
    @Inject(RoomTypeService) private readonly roomTypeService : RoomTypeService,
    @Inject(HotelService) private readonly hotelService : HotelService,
    @Inject(FacilityService) private readonly facilityService : FacilityService,

  ){}

  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  async findAll() {
    return await this.roomRepository.find({
      //relations:['facilities']
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }


  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
