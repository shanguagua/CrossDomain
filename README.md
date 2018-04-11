### 跨域的简单小demo
这是一个关于跨域的简单demo集合，在demo里面会加上自己的理解并添加相应的注释，尽量以简单的demo介绍跨域的方法，适合`入门`学习跨域的。所有demo都是使用基于nodeJs的Web开发框架Koa。
如果要收藏的话，欢迎star。
不定期更新教程，欢迎follow订阅。

### demo介绍
用node的web框架express在`3000端口`和`3001端口`分别开启一个静态服务器，在两个端口间进行跨域传输数据。

#### 配置文件解释
- .gitattributes配置文件，可以改变这个github项目的语言标签
- .gitignore配置文件，设置使用git上传时忽略哪些文件
- package.json配置文件，主要是为了`npm install`而存在，安装express等模块
- readme.md配置文件，在github上面展示说明项目，也就是现在正在看的文档
### Set Up
运行环境
- node.js 全局安装
- npm 全局安装

运行步骤
1. `git clone git@github.com:shanguagua/CrossDomain.git`
2. CrossDomain目录下npm install，下载项目所需的依赖
3. 进入对应的demo目录，①node serverRes.js  ②重新开一个dos窗口   ③node serverReq.js
4. 或者在对应的demo目录下，dos窗口输入`run.bat`，直接一步完成上面的①②③

### 1. CORS跨域

项目运行起来之后，
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001
### 1.1 CORS跨域_Koa

项目运行起来之后，
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001

### 2. JSONP跨域

项目运行起来后，
- 请求页面： http://localhost:3000
- 响应页面为 http://localhost:3001

### 3. 后端设置代理proxy跨域
因为JS同源策略是浏览器的安全策略，所以在浏览器客户端不能跨域访问，而服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就没有跨越问题。简单地说，就是浏览器不能跨域，后台服务器可以跨域。

- demo1
通过使用`http-proxy-middleware插件`设置后端的代理，在 http://localhost:3000 运行

- demo2
不使用插件配置代理，直接使用`http模块`发出请求， 在 http://localhost:3000 运行


### 4. WebSocket跨域
WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
> 项目运行地址： http://localhost:3000/a.html

