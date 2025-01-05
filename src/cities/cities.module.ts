import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity'; // Ensure this path is correct
import { CitiesService } from './cities.service'; // Ensure this path is correct
import { CitiesController } from './cities.controller'; // Ensure this path is correct

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CitiesService],
  controllers: [CitiesController],
  exports: [CitiesService], // Export the service if needed
})
export class CitiesModule {}