import { ITweet } from './TweetMongo'
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class TweetSchema implements ITweet {
  @Field(type => ID, { nullable: true })
  _id: string

  @Field({ nullable: false })
  author: string

  @Field({ nullable: false })
  description: string

  @Field({ nullable: true })
  likes: number

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date
}

@ObjectType()
export class TweetPagination {
  @Field(type => [TweetSchema])
  tweets: TweetSchema[]

  @Field()
  totalPages: number
}

export default TweetSchema
