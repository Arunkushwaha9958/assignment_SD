import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './state.entity'; // Ensure this path is correct
import { StatesService } from './states.service'; // Ensure this path is correct
import { StatesController } from './states.controller'; // Ensure this path is correct

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StatesService],
  controllers: [StatesController],
  exports: [StatesService], // Export the service if needed
})
export class StatesModule {}