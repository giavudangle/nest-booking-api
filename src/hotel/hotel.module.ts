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
import { CountryModule } from '../country/country.module';

@Module({
  controllers: [HotelController],
  providers: [ConfigService,CategoryService,CityService,HotelService],
  imports:[TypeOrmModule.forFeature([Hotel,Category,City]),CityModule,CountryModule],
  exports:[HotelService,TypeOrmModule.forFeature([Hotel,Category,City])]
})
export class HotelModule {}
