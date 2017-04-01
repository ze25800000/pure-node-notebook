const path = require('path');
const fs = require('fs');

let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);
let staticFunc = (url) => {
  let map = {
    '/': '/index.html',
    '/about': '/about.html',
    '/list': '/list.html'
  };
  url = map[url] || url;
  let _path = getPath(url);
  return new Promise((resolve, reject) => {
    fs.readFile(_path, (err, data) => {
      if (err) resolve(`$NOT FOUND${err.stack}`);
      resolve(data);
    });
  })
};
module.exports = staticFunc;
