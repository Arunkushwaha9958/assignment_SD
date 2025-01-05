import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesModule } from './colleges/colleges.module';
import { CollegePlacementModule } from './college-placement/college-placement.module';
import { CollegeWiseCourseModule } from './college-wise-course/college-wise-course.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeederModule } from './seeder/seeder.module';



import { CommandModule } from 'nestjs-command';

@Module({
  imports: [CollegesModule, CollegePlacementModule, CollegeWiseCourseModule, AuthModule, UsersModule, SeederModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'SportsDuniya',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CollegesModule,
    CollegePlacementModule,
    CollegeWiseCourseModule,
    CitiesModule,
    StatesModule,
    UsersModule,
    SeederModule,
    CommandModule,
  ],
})



export class AppModule {}
