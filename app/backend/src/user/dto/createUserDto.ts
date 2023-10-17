import { PartialType } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// same as the class above but the property fields are optional
