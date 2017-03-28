function fn1(x) {
  return new Promise((resolve, reject) => {
    if (x == 1) {
      resolve(x);
    }
    reject(x)
  })
}
function fn2(x) {
  var arr = [1, 2, 3, 4];
  if (arr.indexOf(x) != -1) {
    x = undefined;
  }
  return Promise.resolve(x);
}
var x = 3;
fn2(x)
  .then(val => fn1(x))
  .catch(val => {
    console.log('reject', val); //val 3
  });
/********************Promise.all([])*****************/
var pa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'pa1');
});
var pa2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, 'pa2');
});
var pa3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1500, 'pa3');
});
var pa = Promise.all([pa1, pa2, pa3]);

pa.then(val => {
  console.log('resolve', val);
})
  .catch(val => {
    console.log('reject', val);
  });
/********************Promise.race([])****************/
var pr1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'pr1');
});
var pr2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1200, 'pr2');
});
var pr3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 800, 'pr3');
});
var pr = Promise.race([pr1, pr2, pr3]);
pr.then(val => {
  console.log('resolve', val);
})
  .catch(val => {
    console.log('reject', val);
  });
/** *****************resolve|reject*******************/
Promise.resolve(123).then(val => {
  console.log(val);
});
Promise.reject(123).then(val => {
  console.log(val);
}).catch(val => {
  console.log(val)
});
