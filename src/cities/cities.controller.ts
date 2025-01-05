import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.entity'; // Ensure this path is correct

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  // Get all cities
  @Get()
  async findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  // Get a city by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<City> {
    return this.citiesService.findOne(id);
  }

  // Create a new city
  @Post()
  async create(@Body() cityData: Partial<City>): Promise<City> {
    return this.citiesService.create(cityData);
  }

  // Update a city
  @Put(':id')
  async update(@Param('id') id: number, @Body() cityData: Partial<City>): Promise<City> {
    return this.citiesService.update(id, cityData);
  }

  // Delete a city
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.citiesService.remove(id);
  }
}