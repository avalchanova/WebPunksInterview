import { Module } from "@nestjs/common"
import { TrackingController } from "./tracking.controller"

@Module({
  imports: [],
  providers: [],
  controllers: [TrackingController],
})
export class TrackingModule {}
