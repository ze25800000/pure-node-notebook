module.exports = (ctx) => {
  let {method, url} = ctx.req;
  let {reqCtx} = ctx;

  method = method.toLowerCase();
  return Promise.resolve({
    then: (resolve, reject) => {
      if (method == 'post') {
        let data = [];
        ctx.req.on('data', (chunk) => {
          data.push(chunk);
        }).on('end', () => {
          reqCtx.body = JSON.parse(Buffer.concat(data).toString());
          resolve();
        });
      } else {
        resolve();
      }
    }
  });
};
