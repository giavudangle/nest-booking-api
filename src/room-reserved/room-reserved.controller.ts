import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { RoomReservedService } from './room-reserved.service';
import { CreateRoomReservedDto } from './dto/create-room-reserved.dto';
import { UpdateRoomReservedDto } from './dto/update-room-reserved.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Room Reserved API')
@Controller('room-reserved')
export class RoomReservedController {
  constructor(private readonly roomReservedService: RoomReservedService) {}

  @Post()
  @ApiCreatedResponse()
  @HttpCode(201)
  create(@Body() createRoomReservedDto: CreateRoomReservedDto) {
    return this.roomReservedService.create(createRoomReservedDto);
  }

  @Get()
  findAll() {
    return this.roomReservedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomReservedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomReservedDto: UpdateRoomReservedDto) {
    return this.roomReservedService.update(+id, updateRoomReservedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomReservedService.remove(+id);
  }
}
