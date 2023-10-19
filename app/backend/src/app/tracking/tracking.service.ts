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

  async findOne(slug: string) {
    return await this.trackPageViewRepo.findOne({ where: { slug } })
  }

  async updateCount(
    slug: string,
    trackPageViewDTO: TrackPageViewDTO
  ): Promise<TrackPageViewsEntity> {
    const trackPageViewFromDB = await this.trackPageViewRepo.findOne({
      where: { slug: slug },
    })
    if (trackPageViewFromDB) {
      return this.trackPageViewRepo.save({
        ...trackPageViewFromDB,
        count: trackPageViewFromDB.count + 1,
      })
    }
    const trackPageView: TrackPageViewsEntity = new TrackPageViewsEntity()
    trackPageView.pageTitle = trackPageViewDTO.pageTitle
    trackPageView.pageUrl = trackPageViewDTO.pageUrl
    trackPageView.slug = slug
    trackPageView.count = 1
    return this.trackPageViewRepo.save(trackPageView)
  }
}
