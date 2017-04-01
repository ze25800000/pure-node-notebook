function fn1() {
  return Promise.resolve(123);
}
function fn2(url) {
  return Promise.reject(url);
}
var p1 = fn1()
  .then(res => {
    console.log(res)
    return fn2('hello')
  })
  .then(res => {
    console.log('resolve', res)
  })
  .catch(res => {
    console.log('reject', res)
  })
