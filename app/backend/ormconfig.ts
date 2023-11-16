import { TrackPageViewsEntity } from "src/entities/TrackPageViewsEntity.entity"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import * as dotenv from "dotenv"
dotenv.config()

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: process.env.DB_NAME || "wp-core",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || "wp-usr",
  password: process.env.DB_PASSWORD || "wp-pwd",
  //adding username and pass is not good practise
  //todo: move them as a environment variable file and add them here
  entities: [TrackPageViewsEntity],
  // if we have other entities, add them here
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true" || false,
  // in development: when we commit a change into one of our models, the typeorm will commit these changes into our DB system
  // however, in production environment must be false, because we may lose our data
}

export default config
