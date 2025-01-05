import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { College } from '../colleges/college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.placements)
  college: College;

  @Column()
  year: number;

  @Column({ type: 'decimal', nullable: true })
  highest_placement: number;

  @Column({ type: 'decimal', nullable: true })
  average_placement: number;

  @Column({ type: 'decimal', nullable: true })
  median_placement: number;

  @Column({ type: 'decimal', nullable: true })
  placement_rate: number;
}