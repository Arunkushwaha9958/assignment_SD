import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity'; // Ensure this path is correct

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  // Get all cities
  async findAll(): Promise<City[]> {
    return this.citiesRepository.find();
  }

  // Get a city by ID
  async findOne(id: number): Promise<City> {
    return this.citiesRepository.findOne({ where: { id } }); // Use the correct syntax
  }

  // Create a new city
  async create(cityData: Partial<City>): Promise<City> {
    const city = this.citiesRepository.create(cityData);
    return this.citiesRepository.save(city);
  }

  // Update a city
  async update(id: number, cityData: Partial<City>): Promise<City> {
    await this.citiesRepository.update(id, cityData);
    return this.findOne(id);
  }

  // Delete a city
  async remove(id: number): Promise<void> {
    await this.citiesRepository.delete(id);
  }
}