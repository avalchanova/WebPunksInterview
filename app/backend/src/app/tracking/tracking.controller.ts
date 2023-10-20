import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Options,
  Req,
  Res,
} from "@nestjs/common" // Import Options
import { TrackPageViewService } from "./tracking.service"
import { TrackPageViewDTO } from "./tracking.dto"

@Controller("v1/tracking")
export class TrackPageViewController {
  constructor(private readonly trackPageViewService: TrackPageViewService) {}

  @Options("/*") // Handle preflight requests for all routes under "v1/tracking"
  preflight(@Req() req, @Res() res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    res.status(204).send()
  }

  @Get()
  findAll() {
    return this.trackPageViewService.findAll()
  }

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
