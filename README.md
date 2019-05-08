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
        <img src="https://codecov.io/gh/reixs/reixs/branch/master/graph/badge.svg" />
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
```
Copyright (c) 2019 reixs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```