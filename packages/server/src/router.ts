import { execute } from 'graphql-api-koa'
import * as Router from '@koa/router'

import { schema } from './graphql'

const router = new Router()

router.get('/hello', ctx => {
  ctx.body = 'hello visitor'
})

router.post(
  '/graphql',
  execute({
    schema
  })
)

export { router }
