import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeWiseCourse } from './college-wise-course.entity'; // Ensure this path is correct
import { CollegeWiseCourseService } from './college-wise-course.service'; // Ensure this path is correct
import { CollegeWiseCourseController } from './college-wise-course.controller'; // Ensure this path is correct

@Module({
  imports: [TypeOrmModule.forFeature([CollegeWiseCourse])], // Register the CollegeWiseCourse entity
  providers: [CollegeWiseCourseService],
  controllers: [CollegeWiseCourseController],
  exports: [CollegeWiseCourseService], // Export the service if needed
})
export class CollegeWiseCourseModule {}