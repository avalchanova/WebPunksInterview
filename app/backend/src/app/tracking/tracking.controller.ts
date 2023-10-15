import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation } from "@nestjs/swagger"
import { TrackPageViewRequest } from "./tracking.dto"

@Controller("v1/tracking")
export class TrackingController {
  @Post("trackPageView")
  @ApiOperation({
    operationId: "trackPageView",
  })
  async trackPageView(@Body() request: TrackPageViewRequest): Promise<void> {
    console.log("trackPageView", request)
  }
}
