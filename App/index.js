const fs = require('fs');
const path = require('path');
const staticServer = require("./static-server");
const apiServer = require('./api');
const urlParser = require('./url-parser');

class App {
  constructor() {
  }

  initServer() {
    return (req, res) => {
      let {url, method} = req;
      let context = {
        req: req,
        reqCtx: {
          body: "",//post请求的数据
          query: {} //处理客户端的get
        },
        res: res,
        resCtx: {
          headers: {},// response的返回报文
          body: '' //返回给前端的内容区
        }
      };
      urlParser(context)
        .then(() => {
          return apiServer(context);
        })
        .then(() => {
          return staticServer(context);
        })
        .then(() => {
          let base = {'X-powered-by': 'Node.js'};
          let {body, headers} = context.resCtx;
          res.writeHead(200, 'resolve ok', Object.assign(base, headers));
          res.end(body);
        });
    };
  }
}

module.exports = App;
