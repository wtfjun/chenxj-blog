基于 ``github page`` 和 ``github api`` 搭建的单页面静态博客，页面风格仿照 ECMAScript 6 入门


线上地址：[极简风格个人博客](https://wtfjun.github.io/chenxj-blog)

```bash
$ node -v
v6.9.5

$ npm -v
4.5.0
```

## 命令使用

### 安装

``` bash
$ cd chenxj-blog
$ npm install
```

### 运行

``` js
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --host 127.0.0.1 --port 8080  --hot --inline",
  "build": "cross-env NODE_ENV=production webpack"
},
```

#### 命令

``` bash
// 开发
$ npm run dev

// 打包
$ npm run build
```

## 技术栈

- react@15.3.1
- react-router@3.0.5
- redux@3.6.0
- webpack@1.13.2
- es6

## 浏览器兼容

- Chrome
- Firefox
- Safari
- IE10+
