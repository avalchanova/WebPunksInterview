import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { setupServer } from "./infrastructure"
import { ValidationPipe } from "@nestjs/common"
import * as dotenv from "dotenv"
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )
  app.use((req, res, next) => {
    // here we give the front end (localhost:3000) to access the backenr (client)
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
  })
  await setupServer(app)

  const port = parseInt(process.env.HTTP_PORT) || 3006

  await app.listen(port)

  console.info(`App started -> http://localhost:${port}/`)
}

bootstrap()
