import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Facility } from '../facility/entities/facility.entity';
import { RoomTypeService } from '../room-type/room-type.service';
import { HotelService } from '../hotel/hotel.service';
import { RoomType } from '../room-type/entities/room-type.entity';
import { Hotel } from '../hotel/entities/hotel.entity';
import { RoomTypeModule } from '../room-type/room-type.module';
import { HotelModule } from '../hotel/hotel.module';
import { City } from '../city/entities/city.entity';
import { CityService } from '../city/city.service';
import { Category } from '../category/entities/category.entity';
import { CategoryService } from '../category/category.service';
import { CountryService } from '../country/country.service';
import { Country } from '../country/entities/country.entity';
import { CityModule } from '../city/city.module';
import { CategoryModule } from '../category/category.module';
import { CountryModule } from '../country/country.module';
import { FacilityModule } from '../facility/facility.module';
import { FacilityService } from '../facility/facility.service';
import { ConfigService } from '@nestjs/config';
import { LocalFilesService } from '../local-files/core/local-file.service';
import { LocalFilesModule } from '../local-files/core/local-file.module';

@Module({
  imports:[FacilityModule,RoomTypeModule,HotelModule,CityModule,LocalFilesModule,TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [ConfigService,RoomService,RoomTypeService,HotelService,FacilityService,CategoryService,LocalFilesService],
  exports:[RoomService,RoomTypeService,HotelService,CategoryService]
})
export class RoomModule {}
