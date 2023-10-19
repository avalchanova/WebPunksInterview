import { PartialType } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateTrackPageViewDTO {
  @IsString()
  pageUrl: string

  @IsString()
  pageTitle: string

  @IsNumber()
  timestamp: number

  @IsNumber()
  count: number
}

export class TrackPageViewDTO extends PartialType(CreateTrackPageViewDTO) {}
