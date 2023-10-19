import { Body, Controller, Get, Param, Put } from "@nestjs/common"
import { TrackPageViewService } from "./tracking.service"
import { TrackPageViewDTO } from "./tracking.dto"

@Controller("v1/tracking")
export class TrackPageViewController {
  constructor(private readonly trackPageViewService: TrackPageViewService) {}

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.trackPageViewService.findOne(slug)
  }

  @Put(":slug")
  update(
    @Param("slug") slug: string,
    @Body() trackPageViewDTO: TrackPageViewDTO
  ) {
    return this.trackPageViewService.updateCount(slug, trackPageViewDTO)
  }
}
