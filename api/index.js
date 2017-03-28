/**
 * api server
 * */

module.exports = url => {
  let apiMap = {
    '/list.action': ['123', 'hehe', 'nihao'],
    '/user.action': ['apple', 'banana', 'pear', 'orange'],
  };
  return Promise.resolve(apiMap[url]);
};
