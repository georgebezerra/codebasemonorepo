import { buildSchemaSync } from 'type-graphql'

import TweetSchema from './tweet/TweetSchema'
import TweetController from './tweet/TweetController'

const schema = buildSchemaSync({
  resolvers: [TweetSchema, TweetController]
})

export default schema
