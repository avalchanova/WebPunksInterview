import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class TrackPageViewsEntity {
  @PrimaryColumn() // this is a primary key
  slug: string

  @Column({ unique: true, nullable: false }) // it must be unique and never null
  pageUrl: string

  @Column({ unique: true, nullable: false }) // it must be unique and never null
  pageTitle: string

  @Column() // it must be unique and never null
  count: number
}
