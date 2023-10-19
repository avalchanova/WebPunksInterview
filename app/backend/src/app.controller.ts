import { Controller, Get, Res } from "@nestjs/common"
import { ApiOperation } from "@nestjs/swagger"
import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get() // this is a decorator (when there is a @ - decorator)
  // getHello(): string {
  //   return this.appService.getHello()
  // }

  @Get()
  index(@Res() res: any) {
    return res.redirect("swagger")
  }

  @Get("health")
  @ApiOperation({
    operationId: "healthCheck",
  })
  health() {
    return {
      healthy: true,
    }
  }
}
