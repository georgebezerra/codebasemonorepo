import { Resolver, Arg, Mutation, Query } from 'type-graphql'
import TweetSchema from './TweetSchema'
import MongoTweet from './TweetMongo'

@Resolver(TweetSchema)
class TweetController {
  @Query(returns => [TweetSchema], { name: 'tweets' })
  async find() {
    const tweets = await MongoTweet.find()
    return tweets
  }

  @Query(returns => TweetSchema, { name: 'tweet' })
  async findById(@Arg('id') id: string) {
    const tweet = await MongoTweet.findById(id)

    if (!tweet) {
      throw new Error('TweetSchema does not exists')
    }

    return tweet
  }

  @Mutation(returns => TweetSchema, { name: 'createTweets' })
  async create(
    @Arg('author') author: string,
    @Arg('description') description: string
  ) {
    const tweet = await MongoTweet.create({ author, description, likes: 0 })

    return tweet
  }

  @Mutation(returns => TweetSchema)
  async upvoteTweet(@Arg('id') id: string) {
    const tweet = await MongoTweet.findById(id)

    if (!tweet) {
      throw new Error('TweetSchema does not exists')
    }

    tweet.set({ likes: tweet?.likes + 1 })

    await tweet.save()

    return tweet
  }

  @Mutation(returns => TweetSchema)
  async downvoteTweet(@Arg('id') id: string) {
    const tweet = await MongoTweet.findById(id)

    if (!tweet) {
      throw new Error('TweetSchema does not exists')
    }

    tweet.set({ likes: tweet?.likes - 1 })

    await tweet.save()

    return tweet
  }
}

export default TweetController
