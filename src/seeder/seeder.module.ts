import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SeederCommand } from './seeder.command'; // Import the command class
import { College } from '../colleges/college.entity';
import { CollegePlacement } from '../college-placement/college-placements.entity';
import { CollegeWiseCourse } from '../college-wise-course/college-wise-course.entity';
import { City } from '../cities/city.entity';
import { State } from '../states/state.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      College,
      CollegePlacement,
      CollegeWiseCourse,
      City,
      State,
      User,
    ]),
  ],
  providers: [SeederService, SeederCommand], // Add the command to providers
  exports: [SeederService],
})
export class SeederModule {}