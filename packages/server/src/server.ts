import 'colors'
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

import './database'
import './graphql/tweet/TweetMongo'

import schema from './graphql'

const server = new ApolloServer({
  schema
})

server.listen({ port: 3000 }, () =>
  console.log('Server id running on port 3000'.blue.bold)
)
