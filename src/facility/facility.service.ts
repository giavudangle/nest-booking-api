import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { Facility } from './entities/facility.entity';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility) private readonly facilityRepository : Repository<Facility>
  ){}


  async create(createFacilityDto: CreateFacilityDto) {
    const facility = this.facilityRepository.create(createFacilityDto);
    await this.facilityRepository.save(facility);
    return facility;
  }

  async findAll() {
    return await this.facilityRepository.find({});
  }

  async findOne(id: number) {
    return await this.facilityRepository.findOne(id)
  }

  async findByIds(ids:Number[]){
    return await this.facilityRepository.findByIds(ids);
  }


  update(id: number, updateFacilityDto: UpdateFacilityDto) {
    return `This action updates a #${id} facility`;
  }

  remove(id: number) {
    return `This action removes a #${id} facility`;
  }
}
