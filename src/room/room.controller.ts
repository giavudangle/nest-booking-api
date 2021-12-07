import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiConsumes, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAccessTokenAuthenticationGuard } from '../authentication/guards/jwt-access-token-authentication.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Room API')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}


  @UseGuards(JwtAccessTokenAuthenticationGuard)
  @HttpCode(201)
  @ApiCreatedResponse()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 5 }, // Migrate to shared later.
  ]))
  @Post()
  create(@Body() createRoomDto: CreateRoomDto, @UploadedFiles() files :{
    image? : Express.Multer.File
  }) {
    console.log(files)
    return this.roomService.create(createRoomDto);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
