import { PartialType } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateTrackPageViewDTO {
  // This includes only two of the entity (model) props because this is all we get from the PUT/POST request
  @IsString()
  pageUrl: string

  @IsString()
  pageTitle: string
}

export class TrackPageViewDTO extends PartialType(CreateTrackPageViewDTO) {}
