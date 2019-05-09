<p align="center">
    <a target="_blank" rel="noopener noreferrer">
        <img width="200" src="https://raw.githubusercontent.com/reixs/reixs/master/sandbox/static/reixs.jpg" alt="Reixs logo">
    </a>
</p>
<p align="center">
    <a href="https://travis-ci.org/reixs/reixs">
        <img src="https://travis-ci.org/reixs/reixs.svg?branch=master" alt="Build Status">
    </a>
    <a href="https://codecov.io/gh/reixs/reixs">
        <img src="https://coveralls.io/repos/github/reixs/reixs/badge.svg?branch=master" alt="Coverage Status"/>
    </a>
    <a href="https://coveralls.io/github/reixs/reixs?branch=master">
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


Fetch based HTTP request approach. Can handle callback hell better. There are many request management apis, suitable for applications with a large number of complex requests.

## Overview
Reixs works by declaring callback events for HTTP requests in advance and processing server responses in the form of registration tasks. When reixs's request is completed, the registered tasks will be performed step by step.

Reixs is written in [ECMAScript 6][], transpiled into ECMAScript 5 by [Babel Compiler][], and bundled with [Browserify][].

## Features
- Process the HTTP response through the task
- Split the request state into phases
- Data processing and filtering
- Data response results are traceable
- Function hrottle and Function debounce api
- Establish relationships between requests

## Installation
```bash
npm install --save reixs
```

## Getting Started
```javascript
    var reqApi = reixs('https://api.apiopen.top/getAllUrl')
        .start(function(){
            console.log('Request to start')
        })
        .end(function(){
            console.log('End of the request')
        })
        .error(function(e){
            console.log(`The error message:${e}`)
        })
        .task(function(data){
            console.log(`data:${data}`)
        })
    
    reqApi.get()
```

## Debug
```bash
npm install          # install dev-dependences
npm run dev          # with incremental compile and auto reload
```

## License
MIT

