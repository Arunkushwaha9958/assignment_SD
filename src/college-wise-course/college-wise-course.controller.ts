import { Controller, Get, Param } from '@nestjs/common';
import { CollegeWiseCourseService } from './college-wise-course.service';

@Controller('college_courses')
export class CollegeWiseCourseController {
  constructor(private readonly collegeWiseCourseService: CollegeWiseCourseService) {}

  @Get(':college_id')
  async getCourses(@Param('college_id') collegeId: number) {
    return this.collegeWiseCourseService.getCourses(collegeId);
  }
}