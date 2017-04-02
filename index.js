const http = require('http');
const PORT = 7000;
const App = require('./App');
const server = new App();
const staticServer = require("./App/static-server");
const apiServer = require('./App/api');
const urlParser = require('./App/url-parser');

server.use(urlParser);
server.use(apiServer);
server.use(staticServer);

http
  .createServer(server.initServer())
  .listen(PORT, () => {
    console.log(`listen server port ${PORT}`)
  });
