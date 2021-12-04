import { Test, TestingModule } from '@nestjs/testing';
import { RoomReservedController } from './room-reserved.controller';
import { RoomReservedService } from './room-reserved.service';

describe('RoomReservedController', () => {
  let controller: RoomReservedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomReservedController],
      providers: [RoomReservedService],
    }).compile();

    controller = module.get<RoomReservedController>(RoomReservedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
