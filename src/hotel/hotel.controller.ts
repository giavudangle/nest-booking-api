import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { ApiBadRequestResponse, ApiConsumes, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAccessTokenAuthenticationGuard } from '../authentication/guards/jwt-access-token-authentication.guard';
import { editFileName, imageFileFilter } from '../shared/utils/file-uploading.utils';
import { SingleUploadFileInterceptor } from '../shared/interceptors/single-upload.interceptor';

@ApiTags('Hotel API')
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @HttpCode(201)
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  @UseGuards(JwtAccessTokenAuthenticationGuard)
  @UseInterceptors(SingleUploadFileInterceptor({
    fieldName:'image',
    fileName: editFileName,
    limits:{
      fileSize:Math.pow(1024,2) // 10mb
    },
    fileFilter: imageFileFilter
  }))
  create(@Body() createHotelDto: CreateHotelDto, @UploadedFile() hotelImage : Express.Multer.File) {
    const category = JSON.parse(createHotelDto.category as any)
    const city = JSON.parse(createHotelDto.city as any)
    return this.hotelService.create({...createHotelDto,category,city},hotelImage.path);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(+id);
  }
}
