import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure this path is correct
import { CollegePlacementService } from './college-placement.service';

@Controller('college_data')
export class CollegePlacementController {
    constructor(private readonly collegePlacementService: CollegePlacementService) {}

    @UseGuards(JwtAuthGuard)
    @Get(':college_id')
    async getCollegeData(@Param('college_id') collegeId: number) {
        return this.collegePlacementService.getCollegeData(collegeId);
    }
}