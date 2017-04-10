const fs = require('fs');
const path = require('path');


class App {
  constructor() {
    this.middlewareArr = [];
    this.middlewareChain = Promise.resolve();
  }

  use(middleware) {
    this.middlewareArr.push(middleware)
  }

  composeMiddleware(context) {
    let {middlewareArr} = this;
    for (let middleware of middlewareArr) {
      this.middlewareChain = this.middlewareChain.then(() => {
        return middleware(context);
      })
    }
    return this.middlewareChain;
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
          statusCode: 200,
          statusMessage: 'resolve ok',
          headers: {},// response的返回报文
          body: '' //返回给前端的内容区
        }
      };
      this.composeMiddleware(context)
        .then(() => {
          let base = {'X-powered-by': 'Node.js'};
          let {body, headers, statusCode, statusMessage} = context.resCtx;
          res.writeHead(statusCode, statusMessage, Object.assign(base, headers));
          res.end(body);
        });
    };
  }
}

module.exports = App;
