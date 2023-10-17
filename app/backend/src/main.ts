import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { setupServer } from "./infrastructure"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await setupServer(app)

  const port = process.env.HTTP_PORT || 3000
  await app.listen(port)

  console.info(`App started -> http://localhost:${port}/`)
}

bootstrap()
