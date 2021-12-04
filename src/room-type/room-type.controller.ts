import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAccessTokenAuthenticationGuard } from '../authentication/guards/jwt-access-token-authentication.guard';
import { RoomType } from './entities/room-type.entity';

@ApiTags('Room Type API')
@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @UseGuards(JwtAccessTokenAuthenticationGuard)
  @ApiCreatedResponse({type: RoomType})
  @HttpCode(201)
  @Post()
  async create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    try {
      const room = await this.roomTypeService.create(createRoomTypeDto);
      return room;
    } catch(e) {
      throw new HttpException(e,HttpStatus.BAD_REQUEST)
    }
    
    
  }

  @Get()
  findAll() {
    return this.roomTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto) {
    return this.roomTypeService.update(+id, updateRoomTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypeService.remove(+id);
  }
}
