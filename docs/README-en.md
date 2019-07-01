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

English | [简体中文](https://github.com/reixs/reixs/blob/master/docs/README-zh.md)   
Reixs is a modern HTTP request library running in a browser environment that enables flexible and controllable HTTP request management.

## Overview
Reixs works by predeclaring the callback content of an HTTP request and processing the server response in the form of a registration task. When the reixs-initiated request completes, the registered tasks are incrementally executed.
  
Asynchronous processing of network requests has always been a headache for developers. Reixs can effectively solve Callback Hell and other asynchronous processing problems by splitting the request and response. Unlike other modern HTTP request libraries, the reixs design does not rely on [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Web API  Interface reference | MDN") implementations. Reixs can do more flexible operation on HTTP request through dynamic binding and unbinding request task.

## Features 
- Make [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API "Web API  Interface reference | MDN") from the browse
- Intercept request and response
- Transform request and response data
- Automatic transforms for [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) data
- Register and cancel response tasks
- Request throttling operation

## Installation
```bash
npm install reixs --save
```
The bottom layer of reixs USES the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API "Web API Interface reference | MDN") to send requests. If fetch is not supported, please manually introduce [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill "Web API Interface reference | MDN")  of fetch.
```bash
npm install fetch-polyfill --save

npm install node-fetch-polyfill --save
```

## Start
```javascript
import reixs from 'reixs'

// Create a reixs scheduler and register tasks
let scheduler = reixs('http://api...')
    .task(data => {
        console.log(`data:${data}`)
    })

// Send requests, default to GET requests
scheduler.request()
```
This is a simple example of a reixs request. reixs encourages the separation of requests and callbacks, allowing for better functional deconstruction.  
  
The 'request API' takes the request data and the request type as parameters
```javascript
scheduler.request(
    {
        id:12,
        name:"lili"
    },
    'get'
)
```
## Instance methods

For convenience, dedicated methods are provided for all supported request types.

```javascript
// Query String Parameters
scheduler.get()
// Path
scheduler.push()
// Request Plyload
scheduler.post()
// FormData
scheduler.form()
```
When using proprietary methods, there is no need to specify the request type.

## Operation
Reixs USES chain call API design.
```javascript
let scheduler = reixs('http://api...')
    // Sets the request header
    .setHeader({
        'Accept-Encoding':'gzip'
    })
    // Set the default request parameters and do not enable deep copy
    .setParams({id:12}, false)
    // Sets no cookies
    .setCookie(false)
    // Set 500ms throttling 
    .throttle(500)
    // Set 300ms debounce
    .debounce(300)

scheduler.get()
```

## Lifecycle
Reixs provides the full Lifecycle for a single reques
```javascript
let scheduler = reixs('http://api...')
    // When the 'request API' is invoked
    .prepare(() => {
        console.log('Request pending')
    })
    // When the HTTP request is sent
    .start(() => {
        console.log('Request start')
    })
    // End of HTTP request
    .end(() => {
        console.log('Request closed')
    })
    // Error time
    .error(error => {
        throw error
    })

scheduler.get()
```

## Task
Bind multiple tasks.
```javascript
let task1 = function(){
    console.log('task1')
}
let task2 = function(){
    console.log('task2')
}
let task3 = function(){
    console.log('task3')
}
let scheduler = reixs('http://api...')
    .task(task1)
    .task(task2)
    .task(task3)

scheduler.get()
```
  
cancel the task.
```javascript
// Cancel task
scheduler.removeTask(tesk1)
// Cancel all tasks
scheduler.removeAllTask()
```
Note that the cancel task operation does not support chain calls.

## Data Processing
```javascript
let scheduler = reixs('http://api...')
    // Request interceptor before filtering
    .reqInterceptor(data => {
        if(data === 1){
            return false
        }
    })
    // Request filter
    .reqPipes( data => {
        return data + 1
    })
    // Request interceptor after filtering
    .reqInterceptor(data => {
        if(data === 3){
            return false
        }
    })
    // Response interceptor before filtering
    .resInterceptor(data => {
        if(!data){
            return false
        }
    })
    // Response filter
    .resPipes( data => {
        return data - 1
    })
    // Response interceptor after filtering
    .resInterceptor(data => {
        if(data <= 0){
            return false
        }
    })

scheduler.get(0)
```

## Global Config
```javascript
import reixs from 'reixs'

// Set global request headers
reixs.globalHeader = {
    'Accept-Encoding':'gzip'
}
// Global carry parameter when the request parameter is a {key:value} structure
reixs.globalParams = {
    id:12
}

// Global request filter
reixs.reqPipes(fn)
// Global response filter
reixs.resPipes(fn)
// Request interceptors before global filtering
reixs.beforeReq(fn)
// Request interceptors after global filtering
reixs.afterReq(fn)
// Response interceptors before global filtering
reixs.beforeRes(fn)
// Response interceptors after global filtering
reixs.afterRes(fn)
```

## Scheduler Group
```javascript
let scheduler1 = reixs('http://api1...')
let scheduler2 = reixs('http://api2...')

// The task is invoked after all request responses are complete
let allScheduler = reixs.all(scheduler1, scheduler2)
    .test((data1, data2) => {
        console.log(data1, data2)
    })

allScheduler.get()

// The first request to respond invokes the task
let raceScheduler = reixs.race(scheduler1, scheduler2)
    .test((data) => {
        console.log(data)
    })

raceScheduler.get()
```
The scheduler group inherits the life cycle of the reixs scheduler and the throttling operations

```javascript
let allScheduler = reixs.all(scheduler1, scheduler2)
    // Set 500ms throttling
    .throttle(500)
    // Request sending starts
    .start(() => {
        console.log('Request start')
    })
    // Error time
    .error(error => {
        throw error
    })
    .test((data1, data2) => {
        console.log(data1, data2)
    })

allScheduler.get()
```

## Contributors
Thanks to everyone who contributed to the source code, comments, scripts, documentation, and test cases.
<a href="https://github.com/reixs/reixs/graphs/contributors"><img src="https://opencollective.com/reixs/contributors.svg?width=890" /></a>

