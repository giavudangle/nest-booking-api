import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryService } from '../country/country.service';
import { Country } from '../country/entities/country.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {

  constructor(
    @Inject(CountryService) private readonly countryService : CountryService,
    @InjectRepository(City) private readonly cityRepository : Repository<City>
  ){}

  async create(createCityDto: CreateCityDto) {
    const country = await this.countryService.findOne(createCityDto.country.id)
    const city = this.cityRepository.create({...createCityDto,country})
    await this.cityRepository.save(city)
    return city;
  }

  findAll() {
    return this.cityRepository.find({
      relations:['country','hotels']
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
