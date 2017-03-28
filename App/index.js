const fs = require('fs');
const path = require('path');
const staticServer = require("../static-server");
const apiServer = require('../api');

class App {
  constructor() {
  }

  initServer() {
    return (req, res) => {
      //fs相对启动目录 process.cwd()
      let {url} = req;
      // 所有以action结尾的url, 认为它是ajax
      // let body = '';
      // let headers = {};
      /*if (url.match('action')) {
       apiServer(url).then(val => {
       body = JSON.stringify(val);
       headers = {
       'Content-Type': 'application/json'
       };
       let finalHeader = Object.assign(headers, {'X-powered-by': 'Node.js'});
       res.writeHead(200, 'resolve ok', finalHeader);
       res.end(body);
       });
       } else {
       staticServer(url)
       .then((data) => {
       let finalHeader = Object.assign(headers, {'X-powered-by': 'Node.js'});
       res.writeHead(200, 'resolve ok', finalHeader);
       res.end(data);
       })
       .catch((err) => {
       let finalHeader = Object.assign(headers, {'X-powered-by': 'Node.js'});
       res.writeHead(200, 'resolve ok', finalHeader);
       res.end(err);
       });
       }*/
      res.setHeader('X-powered-by', 'Node.js');
      apiServer(url)
        .then(data => {
          if (data == undefined) {
            return staticServer(url); //如果apiServer中没找到对应请求, 则返回Promise{pending|fulfilled|rejected}
          }
          res.writeHead(200, 'resolve ok', {'Content-Type': 'application/json'});
          res.end(JSON.stringify(data));
        })
        .then(data => { //当staticServer(url)的状态为Promise{fulfilled}时执行
          res.end(data)
        })
        .catch(err => { //当staticServer(url)的状态为Promise{rejected}时执行
          res.writeHead(404, 'not found');
          res.end(err);
        });
    };
  }
}

module.exports = App;
