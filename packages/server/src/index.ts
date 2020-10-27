import * as Koa from 'koa'
import 'colors'

import { router } from './router'

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'Hello World'
  return next()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server id running'.blue.bold)
})
