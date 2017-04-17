const http = require('http');
const PORT = 7000;
const App = require('./App');
const server = new App();
const staticServer = require("./App/static-server");
const apiServer = require('./App/api');
const urlParser = require('./App/url-parser');
const viewServer = require('./App/view-server');
const cookieParser = require('./App/cookie-parser');

server.use(cookieParser);
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);

http
  .createServer(server.initServer())
  .listen(PORT, () => {
    console.log(`listen server port ${PORT}`)
  });
