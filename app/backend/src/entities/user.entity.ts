import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from "typeorm"
import * as bcrypt from "bcrypt" //todo: if i dont need a user, remove the bcrypt from package.json and yarn.lock
import { Comment } from "./comment.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn() // this is a primary key
  id: number

  @Column({ unique: true, nullable: false }) // it must be unique and never null
  name: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  password: string

  //relationship between the comments and the user
  @OneToMany((type) => Comment, (comment) => comment.user) // type=>Comments passes who is the user one to many related to, who is the type of 'many'
  comments: Comment[]

  @BeforeInsert() // everytime before the insertion of a user the password will be saved as a hash
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}
