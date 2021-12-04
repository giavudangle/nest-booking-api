import { Test, TestingModule } from '@nestjs/testing';
import { RoomReservedService } from './room-reserved.service';

describe('RoomReservedService', () => {
  let service: RoomReservedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomReservedService],
    }).compile();

    service = module.get<RoomReservedService>(RoomReservedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
