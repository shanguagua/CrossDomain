const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
const cors = require('koa2-cors');

// 具体参数我们在后面进行解释
app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://127.0.0.1:3000';
        // 这样就能只允许 http://localhost: 3080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router.get('/', async function(ctx) {
    // 设置允许跨域的origin，允许3000端口访问本端口（3001）
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3003');
    ctx.response.body = '我是大白，来自 CROS.';
})

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3001);
console.log('Listen port on 3001');