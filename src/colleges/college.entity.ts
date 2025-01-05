import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'; // Add ManyToOne here
import { CollegePlacement } from '../college-placement/college-placements.entity';
import { CollegeWiseCourse } from '../college-wise-course/college-wise-course.entity';
import { City } from '../cities/city.entity';
import { State } from '../states/state.entity';

@Entity()
export class College {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    score: number;

    @ManyToOne(() => City, (city) => city.colleges)
    city: City;

    @ManyToOne(() => State, (state) => state.colleges)
    state: State;

    @OneToMany(() => CollegePlacement, (placement) => placement.college)
    placements: CollegePlacement[];

    @OneToMany(() => CollegeWiseCourse, (course) => course.college)
    courses: CollegeWiseCourse[];
}