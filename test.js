function fn1(x) {
  return new Promise((resolve, reject) => {
    if (x == 1) {
      resolve(x);
    }
    reject(x)
  })
}
/************************/
function fn2(x) {
  var arr = [1, 2, 3, 4];
  if (arr.indexOf(x) != -1) {
    x = undefined;
  }
  return Promise.resolve(x);
}
/**********************/
var x = 3;
fn2(x)
  .then(val => fn1(x))
  .catch(val => {
    console.log('reject', val); //val 3
  });
