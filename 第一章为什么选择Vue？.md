## 第一章:  为什么选择Vue？

#### 前言

通过前端知识的学习我发现其实有一些知识或工具能让我们更可视化操作学习也能减轻我们的工作以及提高开发效率即使是零基础的前端也能快速入手这也就是为什么我选择vue作为我们前端第一站学习工具。这和大部分学习路线相违背了吧！也会带来相应的吐槽。但是我相信看完后你一定能够掌握

#### Vue是啥？

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

—来自官网的介绍

我们只需要了解一下这是JavaScript的一个前端框架就OK了具体更多我们可以慢慢来介绍毕竟不能一上来就学习JavaScript吧我们先使用vue的方便来可视化的学习html以及css吧

#### 为什么选择vue

在我看了vue的文件就如同我们初学html，css，JavaScript时一般。我们使用css可以使用内联使用js也同样可以

而vue文件更是如此。我们可以来看看

```vue
<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
 
  }
};
</script>

<style lang="less">
  
</style>
```

有没有异常的熟悉呢？当然你想将css等文件分离也是可以的但是暂时而已还没有必要

```javascript
//通过src引入即可
<script src="./helloword.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./helloword.css"></style>
```

vuecli通过webpack的热重载以及简单web实现可视化操作这也是我们需要的

#### 创建一个项目

这里认为你已经安装好node环境以及vuecli

```
# 进入桌面
cd desktop
vue create my-project
# OR
vue ui
```

我们有两种方式创建项目第一种是在终端上通过选项来创建，第二种是通过浏览器UI可视化创建在这里我只介绍第一种。第二种自行尝试

当你输入第一种方法的命令时你的终端会呈现出这样的选项

第一个是我的预设，第二种是默认，第三种是手动设置。我们选择手动设置

```
Vue CLI v3.10.0
┌────────────────────────────┐
│  Update available: 3.11.0  │
└────────────────────────────┘
? Please pick a preset: (Use arrow keys)
❯ vuecrm (vue-router, less, babel, eslint)
  default (babel, eslint)
  Manually select features
```

选择后我们会看见，我们这里只选择需要的东西例如路由(router)以及Css预处理器

```JavaScript
Vue CLI v3.10.0
┌────────────────────────────┐
│  Update available: 3.11.0  │
└────────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
❯◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

接着我们选择yes，你是否使用history模式。使用的话url中就不会出现#号这种丑丑的符号了因为这不利于我们进行API测试的

```
? Use history mode for router? (Requires proper server setup for index fallback
in production) (Y/n)
```

预处理器选择less

```
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
❯ Less
  Stylus

```

代码检查我选择漂亮的就好了当然你也可以选择airbnb公司的这没关系你开心就好

```
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
❯ ESLint + Prettier
```

是否添加额外的功能

```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

你想把配置放在哪

```
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
  In dedicated config files
❯ In package.json
```

回车后就会开始自动生成项目了我们静静等待完成就好了

```
🎉  Successfully created project my-project.
👉  Get started with the following commands:

 $ cd my-project
 $ npm run serve
```

cd进入项目通过第二行代码运行项目

```
 DONE  Compiled successfully in 6213ms                                  09:08:41


  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.11:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

运行成功后你能看见两条链接随意点击任意一个都行

我们可以看见一个简单的页面就出来了点击about还能进行页面跳转呢？

#### 目录介绍

```
node_modules 		//放置模块
public 		//公共文件
src   //需要打包的文件
	-	assets //图片等公共文件
	- components //组件
	- views	//页面文件
	- App.vue	
	- main.js //入口文件
	- router.js //路由文件
.gitigone  //里面写上你不需要上传的文件
package.json  //放置你安装的模块以及启动命令
```

我们需要清理一下我们不需要的内容

App.vue

```vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
</style>
```

删除views中的两个vue文件

删除components中的helloword文件

点击router.js文件

```javascript
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  
  ]
});

```

这样你的页面不会显示报错而是一片空白这是我们需要的效果~~

下一章我们来建立页面首页

