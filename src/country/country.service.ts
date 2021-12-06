import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country) private readonly countryRepository : Repository<Country>

  ){}

  async create(createCountryDto: CreateCountryDto) {
    const country = this.countryRepository.create(createCountryDto)
    await this.countryRepository.save(country);
    return country;
  }

  async findAll() {
    return await this.countryRepository.find({});
  }

  async findOne(id: number) {
    return this.countryRepository.findOne(id)
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
