import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './college.entity';

@Injectable()
export class CollegesService {
  constructor(
    @InjectRepository(College)
    private collegesRepository: Repository<College>,
  ) {}

  async findAll(city: string, state: string): Promise<College[]> {
    const query = this.collegesRepository.createQueryBuilder('college');
    if (city) {
      query.where('college.city_id = :cityId', { cityId: city });
    }
    if (state) {
      query.where('college.state_id = :stateId', { stateId: state });
    }
    return await query.orderBy('college.score', 'ASC').getMany();
  }
}