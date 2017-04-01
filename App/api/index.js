/**
 * api server
 * */

module.exports = (req) => {
  let {url, method, context} = req;
  let apiMap = {
    '/list.action': ['123', 'hehe', 'nihao'],
    '/user.action': ['apple', 'banana', 'pear', 'orange'],
  };
  method = method.toLowerCase();
  if (method == 'get') {
    return Promise.resolve(apiMap[url]);
  } else {
    let {body} = context;
    return Promise.resolve(body)

  }

};
