const Koa = require('koa');
const app = new Koa();
const proxy = require('http-proxy-middleware');
app.use(require('koa-static')(__dirname + '/public'));
app.use((ctx, next) => {
    debugger;
    if (ctx.url.startsWith('/api')) {
        // 需设置ctx.respond = false;不然请求会提前返回给客户端。
        ctx.respond = false;
        // changeOrigin设置为true，本地会虚拟一个服务端接收你的请求并代你发送该请求
        // http://localhost:3000/api   -->   http://localhost:3001/api
        return proxy({
            target: 'http://localhost:3001/',
            changeOrigin: false
        })(ctx.req, ctx.res, next)
    }
    return next();
});
app.listen(3000);
console.log('Listen port on 3000');