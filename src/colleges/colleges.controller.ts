import { Controller, Get, Query } from '@nestjs/common';
import { CollegesService } from './colleges.service';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get()
  async findAll(@Query('city') city: string, @Query('state') state: string) {
    return this.collegesService.findAll(city, state);
  }
}