import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private readonly categoryRepository : Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto)
    await this.categoryRepository.save(category)
    return category;
  }

  async findAll() {
    return await this.categoryRepository.find({})
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne(id)
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
