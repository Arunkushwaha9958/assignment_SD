import { Test, TestingModule } from '@nestjs/testing';
import { CollegePlacementService } from './college-placement.service';

describe('CollegePlacementService', () => {
  let service: CollegePlacementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegePlacementService],
    }).compile();

    service = module.get<CollegePlacementService>(CollegePlacementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
