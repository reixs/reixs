<p align="center">
    <a target="_blank" rel="noopener noreferrer">
        <img width="200" src="https://raw.githubusercontent.com/reixs/reixs/master/docs/reixs.jpg" alt="Reixs logo">
    </a>
</p>
<p align="center">
    <a href="https://travis-ci.org/reixs/reixs">
        <img src="https://travis-ci.org/reixs/reixs.svg?branch=master" alt="Build Status">
    </a>
    <a href="https://coveralls.io/github/reixs/reixs?branch=master">
        <img src="https://coveralls.io/repos/github/reixs/reixs/badge.svg?branch=master" alt="Coverage Status"/>
    </a>
    <a href="https://npmcharts.com/compare/reixs?minimal=true">
        <img src="https://img.shields.io/npm/dm/reixs.svg" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/reixs">
        <img src="https://img.shields.io/npm/v/reixs.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/reixs">
        <img src="https://img.shields.io/npm/l/reixs.svg" alt="License">
    </a>
    <a href="https://gitter.im/reixs/community">
        <img src="https://img.shields.io/gitter/room/reixs/community.svg" alt="Chat">
    </a>
</p>

[English](https://github.com/reixs/reixs/blob/master/docs/README-en.md) | 简体中文  
reixs 是在浏览器环境下运行的现代化 HTTP 请求库，可实现灵活且可控的 HTTP 请求管理

## 概述
reixs 的工作原理是预先声明 HTTP 请求的回调内容，以注册任务的形式处理服务器响应。当 reixs 发起的请求完成时，将逐步执行已注册的任务。
一直以来，网络请求的异步处理都是让开发者异常头疼的问题， reixs 使用将请求与响应拆分的模式可以有效的解决 Callback Hell 等异步处理问题。和其他现代化的 HTTP 请求库不同的是，reixs 使用时不依赖于 [promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise "Web API 接口参考 | MDN") 。reixs 通过动态的绑定与解绑请求任务，可对 HTTP 请求做更加灵活的操作。

## 特性 
- 从浏览器中创建 [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API "Web API 接口参考 | MDN") 请求
- 拦截请求和响应
- 转换请求和响应数据
- [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 数据的自动转换
- 注册与解绑响应任务
- 请求节流操作

## 安装
```bash
npm install reixs --save
```
reixs 底层使用 [fetch api](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API "Web API 接口参考 | MDN") 发送请求，在不支持 fetch 的环境下，请手动引入 fetch 的 [polyfill](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill "Web API 接口参考 | MDN") 。
```bash
npm install fetch-polyfill --save

npm install node-fetch-polyfill --save
```

## 起步
```javascript
import reixs from 'reixs'

// 创建一个 reixs 的调度器, 并注册任务
let scheduler = reixs('http://api...')
    .task(data => {
        console.log(`data:${data}`)
    })

// 发送请求，默认为get请求
scheduler.request()
```
以上是一个简单的 reixs 请求示例。reixs 鼓励将请求与回调分离的写法，这样可以更加良好的对功能解构。  
  
request API 的参数为请求数据和请求类型
```javascript
scheduler.request(
    {
        id:12,
        name:"lili"
    },
    'get'
)
```
## 请求方式

为了方便起见，为所有支持的请求类型提供了专用方法。

```javascript
// Query String Parameters方式发送
scheduler.get()
// Path方式发送
scheduler.push()
// Request Plyload方式发送
scheduler.post()
// FormData方式发送
scheduler.form()
```
当使用专用方法时，不需要指定请求类型

## 设置
reixs 采用链式调用的 API 设计。
```javascript
let scheduler = reixs('http://api...')
    // 设置请求头
    .setHeader({
        'Accept-Encoding':'gzip'
    })
    // 设置默认请求参数， 不启用深拷贝
    .setParams({id:12}, false)
    // 设置不携带cookie
    .setCookie(false)
    // 设置500毫秒频率
    .throttle(500)
    // 设置300毫秒去抖
    .debounce(300)

scheduler.get()
```

## 生命周期
reixs 为单次请求提供完整的生命周期。
```javascript
let scheduler = reixs('http://api...')
    // 请求方法被调用时
    .prepare(() => {
        console.log('请求准备中')
    })
    // HTTP 请求发送开始时
    .start(() => {
        console.log('请求开始发送')
    })
    // HTTP 请求结束时
    .end(() => {
        console.log('请求已结束')
    })
    // 出现异常时
    .error(error => {
        throw error
    })

scheduler.get()
```

## 任务
绑定多个任务。
```javascript
let task1 = function(){
    console.log('任务1')
}
let task2 = function(){
    console.log('任务2')
}
let task3 = function(){
    console.log('任务3')
}
let scheduler = reixs('http://api...')
    .task(task1)
    .task(task2)
    .task(task3)

scheduler.get()
```
  
解绑任务
```javascript
// 解绑任务
scheduler.removeTask(tesk1)
// 解绑全部任务
scheduler.removeAllTask()
```
注意解绑任务操作并不支持链式调用。

## 数据处理
```javascript
let scheduler = reixs('http://api...')
    // 过滤前请求拦截器
    .reqInterceptor(data => {
        if(data === 1){
            return false
        }
    })
    // 请求过滤器
    .reqPipes( data => {
        return data + 1
    })
    // 过滤后请求拦截器
    .reqInterceptor(data => {
        if(data === 3){
            return false
        }
    })
    // 过滤前响应拦截器
    .resInterceptor(data => {
        if(!data){
            return false
        }
    })
    // 响应过滤器
    .resPipes( data => {
        return data - 1
    })
    // 过滤后响应拦截器
    .resInterceptor(data => {
        if(data <= 0){
            return false
        }
    })

scheduler.get(0)
```

## 全局设置
```javascript
import reixs from 'reixs'

// 设置全局请求头
reixs.globalHeader = {
    'Accept-Encoding':'gzip'
}
// 当请求参数为{key:value}结构时的全局携带参数
reixs.globalParams = {
    id:12
}

// 全局请求过滤器
reixs.reqPipes(fn)
// 全局响应过滤器
reixs.resPipes(fn)
// 全局过滤前请求拦截器
reixs.beforeReq(fn)
// 全局过滤后请求拦截器
reixs.afterReq(fn)
// 全局过滤前响应拦截器
reixs.beforeRes(fn)
// 全局过滤后响应拦截器
reixs.afterRes(fn)
```

## 调度器复制
有些场景下需要我们复用一个调度器的配置，我们可以使用copy函数实现

```javascript
let scheduler = reixs('http://api...')
let newScheduler = reixs.copy(scheduler)
```
新调度器继承了原始调度器的所有属性，并且对新调度器的操作并不会作用在原始调度器上。

## 调度器组
```javascript
let scheduler1 = reixs('http://api1...')
let scheduler2 = reixs('http://api2...')

// 所有请求响应完成后调用任务
let allScheduler = reixs.all(scheduler1, scheduler2)
    .test((data1, data2) => {
        console.log(data1, data2)
    })

allScheduler.request()

// 最先响应的请求调用任务
let raceScheduler = reixs.race(scheduler1, scheduler2)
    .test((data) => {
        console.log(data)
    })

raceScheduler.request()

// 请求会串联处理
let successionScheduler = reixs.succession(scheduler1, scheduler2)
    .test((data) => {
        console.log(data)
    })

successionScheduler.request()
```
调度器组会在处理数据时经过组内调度器的过滤器以及拦截器

```javascript
let scheduler1 = reixs('http://api1...')
    .resPipes(data => data + 1)

let scheduler2 = reixs('http://api2...')
    
// 在请求api1后，数据会在加工后作为请求api2的参数
let successionScheduler = reixs.succession(scheduler1, scheduler2)
    .test((data) => {
        console.log(data)
    })
```
调度器组继承了 reixs 调度器的生命周期以及节流操作

```javascript
let allScheduler = reixs.all(scheduler1, scheduler2)
    // 设置500毫秒频率
    .throttle(500)
    // 请求发送开始
    .start(() => {
        console.log('请求开始发送')
    })
    // 出现异常时
    .error(error => {
        throw error
    })
    .test((data1, data2) => {
        console.log(data1, data2)
    })

allScheduler.request()
```
因为调度器组本身也是调度器的一种，所以可以自由嵌套

```javascript
let scheduler1 = reixs('http://api1...')
let scheduler2 = reixs('http://api2...')

let raceScheduler = reixs.race(scheduler1, scheduler2)

let allScheduler = reixs.all(raceScheduler, scheduler2)

let successionScheduler = reixs.succession(allScheduler, raceScheduler)
```

## 贡献者
感谢每一位参与编写源码、注释、脚本、文档、测试用例的贡献者。
<a href="https://github.com/reixs/reixs/graphs/contributors"><img src="https://opencollective.com/reixs/contributors.svg?width=890" /></a>

