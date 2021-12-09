import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Facility } from '../facility/entities/facility.entity';
import { FacilityService } from '../facility/facility.service';
import { HotelService } from '../hotel/hotel.service';
import { LocalFile } from '../local-files/core/local-file.entity';
import { LocalFilesService } from '../local-files/core/local-file.service';
import { RoomTypeService } from '../room-type/room-type.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {

  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @Inject(RoomTypeService) private readonly roomTypeService: RoomTypeService,
    @Inject(HotelService) private readonly hotelService: HotelService,
    @Inject(FacilityService) private readonly facilityService: FacilityService,
    @Inject(LocalFilesService) private readonly localFilesService: LocalFilesService
  ) { }

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    console.log(createRoomDto)

    const queryRunner = this.connection.createQueryRunner()
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const hotel = await this.hotelService.findOne(createRoomDto.hotel.id)
      const facilitiesIds = createRoomDto.facilities.map(fa => fa.id)
      const facilities = await this.facilityService.findByIds(facilitiesIds)
      const roomType = await this.roomTypeService.findOne(createRoomDto.roomType.id)
      const room = this.roomRepository.create({
        ...createRoomDto,
        hotel,
        facilities,
        roomType
      })
      await this.roomRepository.save(room)
      await queryRunner.commitTransaction();
      return room;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new HttpException('Failed when create room', HttpStatus.BAD_REQUEST)
    } finally {
      await queryRunner.release()
    }
  }

  async findAll() {
    return await this.roomRepository.createQueryBuilder("rooms")
      .leftJoinAndSelect("rooms.facilities","facilities")
      .leftJoinAndSelect("rooms.images","images")
      .leftJoinAndSelect("rooms.hotel","hotel")
      .getMany()
  }



  async multipleUploads(files: any, roomId: number) {
    const queryRunner = this.connection.createQueryRunner()
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const room = await this.roomRepository.findOne(roomId)
      const savedFileList = await Promise.all(files.map(async (file) => {
        return await this.localFilesService.saveLocalFileData(file)
      })) as LocalFile[]
      room.images = savedFileList
      await this.roomRepository.save(room);
      await queryRunner.commitTransaction();
      return room;

    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new HttpException('Failed when upload images for room', HttpStatus.BAD_REQUEST)
    } finally {
      await queryRunner.release()

    }
  }

  async findOne(id: number) {
    return await this.roomRepository.findOne(id,{
      relations:['facilities','hotel','images']
    })
  }


  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
