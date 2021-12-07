import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { ConfigService } from '@nestjs/config';
import { CategoryService } from '../category/category.service';
import { CityService } from '../city/city.service';
import { Category } from '../category/entities/category.entity';
import { City } from '../city/entities/city.entity';
import { CityModule } from '../city/city.module';
import { CategoryModule } from '../category/category.module';
import { Country } from '../country/entities/country.entity';
import { CountryService } from '../country/country.service';

@Module({
  controllers: [HotelController],
  providers: [HotelService,ConfigService,CategoryService,CityService,CountryService],
  imports:[TypeOrmModule.forFeature([Hotel,Category,City,Country])]
})
export class HotelModule {}
