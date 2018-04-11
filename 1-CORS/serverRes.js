const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const hello = ctx => {
    // 设置允许跨域的origin，允许3000端口访问本端口（3001）
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    // 设置所允许的HTTP请求方法
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
    ctx.set("Access-Control-Allow-Headers", "x-custom-header, x-requested-with, accept, origin, content-type,x-custom-header");
    ctx.set("Access-Control-Max-Age", "3600");
    ctx.response.body = '我是大白，来自CROS.';
}
app.use(route.all('/', hello));
app.listen(3001);
console.log('Listen port on 3001');