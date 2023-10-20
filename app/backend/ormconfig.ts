import { TrackPageViewsEntity } from "src/entities/TrackPageViewsEntity.entity"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "wp-core",
  host: "localhost",
  port: 5432,
  username: "wp-usr",
  password: "wp-pwd",
  //adding username and pass is not good practise
  //todo: move them as a environment variable file and add them here
  entities: [TrackPageViewsEntity],
  // if we have other entities, add them here
  synchronize: true,
  // in development: when we commit a change into one of our models, the typeorm will commit these changes into our DB system
  // however, in production environment must be false, because we may lose our data
}

export default config
