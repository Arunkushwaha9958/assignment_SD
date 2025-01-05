import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Injectable()
export class SeederCommand {
  constructor(private readonly seederService: SeederService) {}

  @Command({
    command: 'seed',
    describe: 'Seed the database with initial data',
  })
  async run(): Promise<void> {
    await this.seederService.seed();
    console.log('Database seeded successfully!');
  }
}