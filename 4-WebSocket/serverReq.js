const app = require('koa')();
app.use(require('koa-static')(__dirname + '/public'));
app.listen(3000);
console.log('Listen port on 3000');