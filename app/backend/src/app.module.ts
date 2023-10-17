import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppModules } from "./app"
import { AppService } from "./app.service"
import { UserModule } from "./user/user.module"
import { UserService } from "./user/user.service"
import { CommentModule } from "./comment/comment.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import config from "ormconfig"

@Module({
  imports: [
    ...AppModules,
    UserModule,
    CommentModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule { }
