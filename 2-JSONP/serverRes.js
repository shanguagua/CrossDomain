const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/', async function(ctx) {
    var callbackName = ctx.query.callback; // guaguaF
    debugger;
    ctx.response.body = (callbackName + "({'message': 'www.shanzhonglei.com from JSONP!'});");
    // guaguaF({'message': 'www.shanzhonglei.com from JSONP!'})
    // 一个带参数的执行函数
})

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3001);
console.log('Listen port on 3001');