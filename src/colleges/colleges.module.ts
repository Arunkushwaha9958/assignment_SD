import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './college.entity'; // Ensure this path is correct
import { CollegesService } from './colleges.service'; // Ensure this path is correct
import { CollegesController } from './colleges.controller'; // Ensure this path is correct

@Module({
  imports: [TypeOrmModule.forFeature([College])], // Register the College entity
  providers: [CollegesService],
  controllers: [CollegesController],
  exports: [CollegesService], // Export the service if needed
})
export class CollegesModule {}