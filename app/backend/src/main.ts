import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { setupServer } from "./infrastructure"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // will skip if a non defined prop is added and will create the user without it
      forbidNonWhitelisted: true, // will return an error if there is an non defined prop
    })
  ) // validation for the user
  await setupServer(app)

  const port = process.env.HTTP_PORT || 3000
  await app.listen(port)

  console.info(`App started -> http://localhost:${port}/`)
}

bootstrap()
