import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiConsumes, ApiCreatedResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtAccessTokenAuthenticationGuard } from '../authentication/guards/jwt-access-token-authentication.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { MultipleUploadFileInterceptor } from '../shared/interceptors/multiple-upload.interceptor';
import { editFileName, imageFileFilter } from '../shared/utils/file-uploading.utils';
import { IUploadFileDto } from './interfaces/IUploadFileDto.interface';

@ApiTags('Room API')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}


  @UseGuards(JwtAccessTokenAuthenticationGuard)
  @HttpCode(201)
  @ApiCreatedResponse()
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Post('uploads')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(MultipleUploadFileInterceptor([
    {
      name:'image',maxCount:5
    }
  ],{
    fileFilter:imageFileFilter,
    fileName:editFileName,
    limits:{
      fileSize:Math.pow(1024,3)
    }
  }))
  uploadImages(@Param('id') roomId : number,@Body() uploadDto : IUploadFileDto,@UploadedFiles() files:{image? : Express.Multer.File}){
    return this.roomService.multipleUploads(files.image,roomId);
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
