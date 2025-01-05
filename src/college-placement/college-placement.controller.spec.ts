import { Test, TestingModule } from '@nestjs/testing';
import { CollegePlacementController } from './college-placement.controller';

describe('CollegePlacementController', () => {
  let controller: CollegePlacementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollegePlacementController],
    }).compile();

    controller = module.get<CollegePlacementController>(CollegePlacementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
