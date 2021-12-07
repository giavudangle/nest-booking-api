import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facility } from './entities/facility.entity';

@Module({
  controllers: [FacilityController],
  providers: [FacilityService],
  imports:[TypeOrmModule.forFeature([Facility])],
  exports:[FacilityService]
})
export class FacilityModule {}
