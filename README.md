# 说明
参考资料:    
[(1/2)Vue构建单页应用最佳实战](https://segmentfault.com/a/1190000005009052)    
[Build a Single Page Time Tracking App with Vue.js, Part II](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii)

# 笔记
vue.js是一个只关注于UI的前端框架,MVVM中的ViewModel,进行双向数据绑定.
与react不同的是,Vue.js操作的是实际的dom,而react操作的是VirtualDom.
Vue.js也吸收了Angular.js中的许多优秀的设计,如指令等.

## 第一部分(组件与路由)
* 模板template 
	嵌入了vue标签的一堆html(html片段)
* 组件component 
	包含了template,script,style的对象
* Vue.js应用通常都从一个根实例开始
	这个Vue根实例,可以通过js语法:
	```
	var vm = new Vue({
        // 选项
    })
	```
	也可以,通过引用一个`App.vue`,这个App.vue文件中通常包含了template,script等
	```
	// 引入组件
	import App from './App'
	```

今天五一假第一天,文档什么的实在看不下去啊怎么办...

## 第二部分(与服务端通信)
这里使用[vue-resource](https://github.com/vuejs/vue-resource)来进行服务端通信.

后台采用express,数据存储使用[mongodb](https://docs.mongodb.com/getting-started/shell/introduction/).

使用vue-resource进行服务端通信,对于不同域的服务端接口地址,需要服务端配置允许跨域访问源域名:

```
// 允许跨域请求
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // 允许任何源地址的请求
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
```

# vue-time-tracker

> A Vue.js project

## Build Setup

**front-end**
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

**Server**
```bash
# run node server
npm run server
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
