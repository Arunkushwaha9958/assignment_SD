import { Test, TestingModule } from '@nestjs/testing';
import { CollegeWiseCourseService } from './college-wise-course.service';

describe('CollegeWiseCourseService', () => {
  let service: CollegeWiseCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegeWiseCourseService],
    }).compile();

    service = module.get<CollegeWiseCourseService>(CollegeWiseCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
