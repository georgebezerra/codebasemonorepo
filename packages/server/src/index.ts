import * as Koa from 'koa'
import 'colors'

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'Hello World'
  return next()
})

app.listen(3000)
console.log('Hello World'.blue.bold)
