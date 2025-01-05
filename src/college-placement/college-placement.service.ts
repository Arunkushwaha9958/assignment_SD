import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from './college-placements.entity';

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  async getCollegeData(collegeId: number): Promise<any> {
    // Fetch average placement data
    const avgSection = await this.collegePlacementRepository
      .createQueryBuilder('placement')
      .select('placement.year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest')
      .addSelect('AVG(placement.average_placement)', 'avg_average')
      .addSelect('AVG(placement.median_placement)', 'avg_median')
      .addSelect('AVG(placement.placement_rate)', 'avg_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.average_placement IS NOT NULL')
      .andWhere('placement.median_placement IS NOT NULL')
      .andWhere('placement.placement_rate IS NOT NULL')
      .andWhere('placement.highest_placement != 0')
      .andWhere('placement.average_placement != 0')
      .andWhere('placement.median_placement != 0')
      .groupBy('placement.year')
      .getRawMany();

    // Fetch detailed placement data
    const placementSection = await this.collegePlacementRepository
      .createQueryBuilder('placement')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.average_placement IS NOT NULL')
      .andWhere('placement.median_placement IS NOT NULL')
      .andWhere('placement.placement_rate IS NOT NULL')
      .andWhere('placement.highest_placement != 0')
      .andWhere('placement.average_placement != 0')
      .andWhere('placement.median_placement != 0')
      .getMany();

    // Check if placements exist
    if (placementSection.length === 0) {
      throw new NotFoundException(`No placements found for college ID ${collegeId}`);
    }

    // Calculate placement trend
    const placementTrend = this.calculatePlacementTrend(placementSection);

    return {
      avg_section: avgSection,
      placement_section: placementSection.map((placement) => ({
        ...placement,
        placement_trend: placementTrend,
      })),
    };
  }

  private calculatePlacementTrend(placements: CollegePlacement[]): string | null {
    if (placements.length < 2) return null;

    const lastYear = placements[placements.length - 1];
    const secondLastYear = placements[placements.length - 2];

    if (lastYear.placement_rate > secondLastYear.placement_rate) {
      return 'UP';
    } else if (lastYear.placement_rate < secondLastYear.placement_rate) {
      return 'DOWN';
    }
    return 'SAME';
  }
}