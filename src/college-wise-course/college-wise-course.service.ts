import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegeWiseCourse } from './college-wise-course.entity';

@Injectable()
export class CollegeWiseCourseService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private collegeWiseCourseRepository: Repository<CollegeWiseCourse>,
  ) {}

  async getCourses(collegeId: number): Promise<CollegeWiseCourse[]> {
    const courses = await this.collegeWiseCourseRepository
      .createQueryBuilder('course')
      .where('course.college_id = :collegeId', { collegeId })
      .orderBy('course.course_fee', 'DESC')
      .getMany();

    // Check if courses exist
    if (courses.length === 0) {
      throw new NotFoundException(`No courses found for college ID ${collegeId}`);
    }

    return courses;
  }

  // Optional: Add a method to create a new course
  async createCourse(courseData: Partial<CollegeWiseCourse>): Promise<CollegeWiseCourse> {
    const course = this.collegeWiseCourseRepository.create(courseData);
    return this.collegeWiseCourseRepository.save(course);
  }

  // Optional: Add a method to update an existing course
  async updateCourse(id: number, courseData: Partial<CollegeWiseCourse>): Promise<CollegeWiseCourse> {
    await this.collegeWiseCourseRepository.update(id, courseData);
    const updatedCourse = await this.collegeWiseCourseRepository.findOne({ where: { id } });
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return updatedCourse;
  }

  // Optional: Add a method to delete a course
  async deleteCourse(id: number): Promise<void> {
    const result = await this.collegeWiseCourseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
  }
}