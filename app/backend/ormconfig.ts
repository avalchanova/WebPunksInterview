import { Comment } from "src/entities/comment.entity"
import { Topic } from "src/entities/topic.entity"
import { User } from "src/entities/user.entity"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "testDB",
  host: "localhost",
  port: 5432,
  username: "wp-usr",
  password: "wp-pwd",
  //adding username and pass is not good practise
  //todo: move them as a environment variable file and add them here
  entities: [User, Topic, Comment],
  // if we have other entities, add them here
  synchronize: true,
  // in development: when we commit a change into one of our models, the typeorm will commit these changes into our DB system
  // however, in production environment must be false, because we may lose our data
}

export default config
