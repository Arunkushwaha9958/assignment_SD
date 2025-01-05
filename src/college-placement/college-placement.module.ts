import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegePlacement } from './college-placements.entity'; // Ensure this path is correct
import { CollegePlacementService } from './college-placement.service'; // Ensure this path is correct
import { CollegePlacementController } from './college-placement.controller'; // Ensure this path is correct

@Module({
  imports: [TypeOrmModule.forFeature([CollegePlacement])], // Register the CollegePlacement entity
  providers: [CollegePlacementService],
  controllers: [CollegePlacementController],
  exports: [CollegePlacementService], // Export the service if needed
})
export class CollegePlacementModule {}