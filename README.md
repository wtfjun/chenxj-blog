# chenxj's blog

基于 ``github page`` 和 ``github api`` 搭建的单页面静态博客


```bash
$ node -v
v6.9.5

$ npm -v
4.5.0
```

## 命令使用

### 安装

``` bash
$ cd cobish.github.io
$ npm install
```

### 运行

``` js
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --hot --inline",
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
