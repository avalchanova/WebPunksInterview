import { Module } from "@nestjs/common"
import { TrackPageViewController } from "./tracking.controller"
import { TrackPageViewsEntity } from "src/entities/TrackPageViewsEntity.entity"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TrackPageViewService } from "./tracking.service"

@Module({
  imports: [TypeOrmModule.forFeature([TrackPageViewsEntity])],
  providers: [TrackPageViewService],
  controllers: [TrackPageViewController],
})
export class TrackingModule {}
