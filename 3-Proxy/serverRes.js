const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/api', async function(ctx) {
    ctx.body = '我是大白，来自 Proxy代理.';
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
console.log('Listen port on 3001');