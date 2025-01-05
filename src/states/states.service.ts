import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StatesService {
    constructor(
        @InjectRepository(State)
        private statesRepository: Repository<State>,
    ) {}

    // Add your service methods here
    async findAll(): Promise<State[]> {
        return this.statesRepository.find();
    }
}