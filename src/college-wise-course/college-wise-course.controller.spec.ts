import { Test, TestingModule } from '@nestjs/testing';
import { CollegeWiseCourseController } from './college-wise-course.controller';

describe('CollegeWiseCourseController', () => {
  let controller: CollegeWiseCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollegeWiseCourseController],
    }).compile();

    controller = module.get<CollegeWiseCourseController>(CollegeWiseCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
