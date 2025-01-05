import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from '../colleges/college.entity';
import { CollegePlacement } from '../college-placement/college-placements.entity';
import { CollegeWiseCourse } from '../college-wise-course/college-wise-course.entity';
import { City } from '../cities/city.entity';
import { State } from '../states/state.entity';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt'; // Add this import

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(College) private collegeRepository: Repository<College>,
    @InjectRepository(CollegePlacement) private placementRepository: Repository<CollegePlacement>,
    @InjectRepository(CollegeWiseCourse) private courseRepository: Repository<CollegeWiseCourse>,
    @InjectRepository(City) private cityRepository: Repository<City>,
    @InjectRepository(State) private stateRepository: Repository<State>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async seed() {
    // Seed States
    const state1 = await this.stateRepository.save({ name: 'California' });
    const state2 = await this.stateRepository.save({ name: 'Texas' });

    // Seed Cities
    const city1 = await this.cityRepository.save({ name: 'Los Angeles' });
    const city2 = await this.cityRepository.save({ name: 'Houston' });

    // Seed Colleges
    const college1 = await this.collegeRepository.save({
      name: 'University of California',
      score: 900,
      city: city1,
      state: state1,
    });

    const college2 = await this.collegeRepository.save({
      name: 'University of Texas',
      score: 850,
      city: city2,
      state: state2,
    });

    // Seed College Placements
    await this.placementRepository.save([
      {
        college: college1,
        year: 2021,
        highest_placement: 120000,
        average_placement: 80000,
        median_placement: 75000,
        placement_rate: 90,
      },
      {
        college: college1,
        year: 2022,
        highest_placement: 130000,
        average_placement: 85000,
        median_placement: 80000,
        placement_rate: 92,
      },
      {
        college: college2,
        year: 2021,
        highest_placement: 110000,
        average_placement: 78000,
        median_placement: 74000,
        placement_rate: 88,
      },
      {
        college: college2,
        year: 2022,
        highest_placement: 115000,
        average_placement: 79000,
        median_placement: 76000,
        placement_rate: 89,
      },
    ]);

    // Seed College Courses
    await this.courseRepository.save([
      {
        college: college1,
        course_name: 'Computer Science',
        course_duration: '4 years',
        course_fee: 50000,
      },
      {
        college: college1,
        course_name: 'Electrical Engineering',
        course_duration: '4 years',
        course_fee: 55000,
      },
      {
        college: college2,
        course_name: 'Mechanical Engineering',
        course_duration: '4 years',
        course_fee: 52000,
      },
      {
        college: college2,
        course_name: 'Civil Engineering',
        course_duration: '4 years',
        course_fee: 48000,
      },
    ]);

    // Seed Users
    await this.userRepository.save([
      {
        username: 'admin',
        password: await bcrypt.hash('admin123', 10),
      },
      {
        username: 'user1',
        password: await bcrypt.hash('user123', 10),
      },
    ]);
  }
}