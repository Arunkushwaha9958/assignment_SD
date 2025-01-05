import { Controller, Get } from '@nestjs/common';
import { StatesService } from './states.service';
import { State } from './state.entity';

@Controller('states')
export class StatesController {
    constructor(private readonly statesService: StatesService) {}

    @Get()
    async findAll(): Promise<State[]> {
        return this.statesService.findAll();
    }
}