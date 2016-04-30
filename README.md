# 说明
在segmentFault上看到的一篇文章:[(1/2)Vue构建单页应用最佳实战](https://segmentfault.com/a/1190000005009052),对照着VueJs官方文档敲出来的.

# 笔记
vue.js是一个只关注于UI的前端框架,MVVM中的ViewModel,进行双向数据绑定.
与react不同的是,Vue.js操作的是实际的dom,而react操作的是VirtualDom.
Vue.js也吸收了Angular.js中的许多优秀的设计,如指令等.

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

# vue-time-tracker

> A Vue.js project

## Build Setup

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
