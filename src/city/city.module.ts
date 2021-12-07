import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { CountryService } from '../country/country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { CountryModule } from '../country/country.module';
import { Country } from '../country/entities/country.entity';

@Module({
  controllers: [CityController],
  providers: [CityService,CountryService],
  imports:[CountryModule,TypeOrmModule.forFeature([City,Country])],
  exports:[CityService]
})
export class CityModule {}
