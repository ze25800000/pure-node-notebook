const path = require('path');
const fs = require('fs');

let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);
let staticFunc = (url, callback) => {
  let map = {
    '/': '/index.html',
    '/about': '/about.html',
    '/list': '/list.html'
  };
  url = map[url] || url;
  let _path = getPath(url);
  let body = '';
  /*try {
   body = fs.readFileSync(_path);
   } catch (error) {
   body = `NOT FOUND${error.stack}`;
   }
   return body;*/
  fs.readFile(_path, (err, data) => {
    callback(err, data);
  })
};
module.exports = staticFunc;
