## 第五章:ElementUI组件库介绍与使用

#### 前言

为什么介绍elementUI而不是其他的一些组件库呢？这个问题其实不大因为你只要学会一个其他的都一样操作只不过功能啊什么的有一定的出入。我也是比较喜爱element出品的组件库的原因是人家长得好看，好用方便啊~当然很多培训班也是使用element作为培训的。当然使用别人的东西多少会有一些局限性的例如样式啊什么的最好就不要随意去修改能堆就堆不能就自己写呗

#### 学习目的

如何引入组件库以及如何使用

#### 开始操作

如果使用vue-cli@3 我们可以使用以下命令进行安装

```
vue add element
```

然后一路选择什么语言啊zh使用less什么的一路跟着选择就对了

完整引入文件会比较大但是学习的话就完整的引入会比较方便

main.js中引入以下代码

```javascript
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

按需引入请参考[element官网](https://element.eleme.cn/#/zh-CN/component/quickstart)这里不细说

#### 如何使用

在官网中点击组件侧边栏上写了我们常用的属性标签点击进去不仅有样式展示也有代码展示我们可以复制到自己的项目中进行使用即可

例如el开头表示这是element的组件标签和我们自定义组件相似

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

目前项目中并未使用到但是提前介绍安装接下来的章节就不再重复了