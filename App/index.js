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
      req.context = {
        body: '',
        query: {},
        method: 'get'
      };
      urlParser(req)
        .then(() => {
          return apiServer(req)
        })
        .then(val => {
          if (!val) {
            return staticServer(req)
          } else {
            return val;
          }
        })
        .then(val => {
          let body = '';
          let base = {'X-powered-by': 'Node.js'};
          if (val instanceof Buffer) {
            body = val;
          } else {
            body = JSON.stringify(val);
            let finalHeader = Object.assign(base, {'Content-Type': 'application/json'});
            res.writeHead(200, 'resolve ok', finalHeader);
          }
          res.end(body)
        })
    };
  }
}

module.exports = App;
