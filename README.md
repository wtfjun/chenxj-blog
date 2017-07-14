基于 ``koa`` 和 ``react`` 搭建的个人博客，风格仿照 [【ECMAScript 6 入门】](http://es6.ruanyifeng.com/)

基于前后端分离的思想，后端提供接口，前端调用


开源代码请点击这里： [github地址](https://github.com/wtfjun/chenxj-blog) 

线上地址：[极简风格个人博客](http://47.52.5.137:4011/#/)

```bash
$ node -v
v6.9.5

$ npm -v
4.5.0
```

## 命令使用

### 安装 && 运行

``` bash
$ cd chenxj-blog
$ npm install // src包安装

$ cd server
$ npm install // 后台包安装

$ node run // 启动后台
$ cd ../
$ npm run dev // 启动前端
```



#### 命令

``` bash
// 开发
$ npm run dev

// 打包
$ npm run build
```

## 技术栈

前端：
- react@15.3.1
- react-router@3.0.5
- redux@3.6.0
- webpack@1.13.2
- es6

后台：
- koa@2.0.0-alpha.8
- mongoose@4.11.1
- asyn/await


## 浏览器兼容

- Chrome
- Firefox
- Safari
- IE10+
