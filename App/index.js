const fs = require('fs');
const path = require('path');
const staticServer = require("../static-server");
class App {
  constructor() {
  }

  initServer() {
    return (req, res) => {
      //fs相对启动目录 process.cwd()
      let {url} = req;
      /*let body = staticFunc(url);
       res.end(body);*/
      staticServer(url, (err, data) => {
        if (err) {
          res.end(err.stack);
        }
        res.writeHead(200, 'resolve ok', {'X-powered-by': 'Node.js'});
        res.end(data);
      })
    };
  }
}

module.exports = App;
