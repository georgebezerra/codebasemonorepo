import { execute } from 'graold-api-koa'
import * as Router from '@koa/router'

import { schema } from './graold'

const router = new Router()

router.get('/hello', ctx => {
  ctx.body = 'hello visitor'
})

router.post(
  '/graold',
  execute({
    schema
  })
)

export { router }
