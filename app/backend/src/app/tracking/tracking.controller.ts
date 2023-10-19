import { Body, Controller, Get, Param, Put } from "@nestjs/common"
import { TrackPageViewService } from "./tracking.service"
import { TrackPageViewDTO } from "./tracking.dto"

@Controller("v1/tracking")
export class TrackPageViewController {
  constructor(private readonly trackPageViewService: TrackPageViewService) {}

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.trackPageViewService.findOne(id)
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() trackPageViewDTO: TrackPageViewDTO) {
    return this.trackPageViewService.updateCount(id, trackPageViewDTO)
  }
}
