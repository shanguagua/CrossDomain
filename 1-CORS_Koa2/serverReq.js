const Koa = require('koa');
const app = new Koa();
app.use(require('koa-static')(__dirname + '/public'));
app.listen(3000);
console.log('Listen port on 3000');