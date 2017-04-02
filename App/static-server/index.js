const path = require('path');
const fs = require('fs');

let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);
let staticFunc = (ctx) => {
  let {url, method} = ctx.req;
  let {resCtx} = ctx;
  if (!url.match('action')) {
    let map = {
      '/': '/index.html',
      '/about': '/about.html',
      '/list': '/list.html'
    };
    url = map[url] || url;
    let _path = getPath(url);
    return new Promise((resolve, reject) => {
      if (!url.match('action')) {
        fs.readFile(_path, (err, data) => {
          if (err) {
            resCtx.body = `$NOT FOUND${err.stack}`
          }
          resCtx.body = data;
          resolve();
        });
      } else {
        resolve();
      }
    })
  }
};
module.exports = staticFunc;
