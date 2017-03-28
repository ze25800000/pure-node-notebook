const http = require('http');
const PORT = 7000;
const App = require('./App');
const server = new App();
http
  .createServer(server.initServer())
  .listen(PORT, () => {
    console.log(`listen server port ${PORT}`)
  });
