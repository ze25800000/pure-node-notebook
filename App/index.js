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
      apiServer(url).then(val => {
        if (!val) {
          return staticServer(url)
        } else {
          return val;
        }
      }).then(val => {
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
