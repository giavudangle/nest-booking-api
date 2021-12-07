import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { CityService } from '../city/city.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @Inject(CityService) private readonly cityService : CityService,
    @Inject(CategoryService) private readonly categoryService : CategoryService,
    @InjectRepository(Hotel) private readonly hotelRepository : Repository<Hotel>
  ){}


  async create(createHotelDto: CreateHotelDto,imageUrl : string) {
    // Elasticsearch applies later
    const category  = await this.categoryService.findOne(createHotelDto.category.id) 
    const city = await this.cityService.findOne(createHotelDto.city.id)
    const hotel = {...createHotelDto,imageUrl,category,city}

    try {
      const savedHotel = this.hotelRepository.create(hotel)
      await this.hotelRepository.save(savedHotel);
      return savedHotel;
    } catch(e){
      throw new HttpException(e,HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    return await this.hotelRepository.find({
      relations:['city','category','rooms','facilities']
    })
  }

  async findOne(id: number) {
    return await this.hotelRepository.findOne(id,{
      relations:['city','rooms','category']
    })
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  async remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
