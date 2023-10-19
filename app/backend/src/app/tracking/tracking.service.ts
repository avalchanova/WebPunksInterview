import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { TrackPageViewsEntity } from "src/entities/TrackPageViewsEntity.entity"
import { Repository } from "typeorm"
import { TrackPageViewDTO } from "./tracking.dto"

@Injectable()
export class TrackPageViewService {
  constructor(
    @InjectRepository(TrackPageViewsEntity)
    private readonly trackPageViewRepo: Repository<TrackPageViewsEntity>
  ) {}

  async findOne(slug: number) {
    return await this.trackPageViewRepo.findOne({ where: { slug: slug } })
  }

  async updateCount(slug: number, trackPageViewDTO: TrackPageViewDTO) {
    return await this.trackPageViewRepo.update(slug, {
      ...trackPageViewDTO,
      count: trackPageViewDTO.count + 1,
    })
  }
}
