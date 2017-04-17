/*
 * 处理cookie
 */
const cookie_parser = require('cookie');
//设置白名单
module.exports = (ctx) => {
  let {url} = ctx.req;
  let {cookie} = ctx.req.headers;
  let {resCtx, res} = ctx;
  let cookieObj = cookie_parser.parse(cookie ? cookie : '');
  return Promise.resolve({
    then: (resolve, reject) => {
      let cookieStr = time => `authd=yangze;Max-Age=${time}`;
      if (cookieObj['authd']) {
        resCtx.hasUser = true;
        res.setHeader('Set-Cookie', cookieStr(3600))
      }
      //设置白名单
      const whiteNameList = ['/name_yangze'];
      //登录
      if (whiteNameList.indexOf(url) > -1) {
        res.setHeader('Set-Cookie', cookieStr(3600))
      }
      //登出
      if (url == '/logout') {
        res.setHeader('Set-Cookie', cookieStr(0))
      }
      resolve()
    }
  })
};
