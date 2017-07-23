/**
 * api server
 * */

module.exports = (ctx) => {
  let {url, method} = ctx.req;
  let {resCtx, reqCtx} = ctx;
  let {res} = ctx;
  let apiMap = {
    '/list.action': ['123', 'hehe', 'nihao'],
    '/user.action': ['apple', 'banana', 'pear', 'orange'],
  };

  method = method.toLowerCase();
  return Promise.resolve({
    then: (resolve, reject) => {
      if (url.match('action')) {
        if (method == 'get') {
          resCtx.body = JSON.stringify(apiMap[url]);
        } else {
          let {body} = reqCtx;
          resCtx.body = JSON.stringify(body);
        }
        resCtx.headers = Object.assign(resCtx.headers, {"content-Type": "application/json"});
      }
      resolve();
    }
  });

};
