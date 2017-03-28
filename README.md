# pure-node-notebook
nodejs实现网络笔记本
### lesson3
- res.writeHead(200, 'resolve ok', {'Content-Type': 'application/json'}); 当响应头中有'Content-Type': 'application/json'时, 则不用进行JSON.parse转换
- try catch 只能捕获同步错误
#### Promise
- typeof Promise == 'function'
- prototype===> then/catch
    - then可接受两个参数，第一个参数处理resolve的结果，第二个参数处理reject的结果
    - catch只接受一个参数，处理reject结果
- 静态方法 ===>all/race/resolve/reject

---
1. Promise
    - pending
    - rejected
    - fulfilled
2. prototype原型方法和静态方法
> new Promise((resolve,reject)=>{})
- Promise.prototype.then
- Promise.prototype.catch
```
var p = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'hello world');
});
console.log(p);

//1.将回调函数resolve和reject存入队列
//2.如果promise已经是fulfilled或者reject状态, 就会执行resolve或者reject回调函数

p.then(val => {
  console.log('resolve', val);
}, val => {
  console.log('reject', val);
});
p.catch(val => console.log(`catch val is ${val}`));
```

- Promise.all([])
    - 所有Promise状态为fulfilled时, 执行then, 传入参数为数组
    - 只要有一个Promise状态为rejected时, 执行catch
    ```
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
    ```
- Promise.race([])
    - 不管状态是fulfilled还是rejected, 谁的pending先结束, 就执行谁的then或者catch
    ```
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
    ```

- Promise.resolve | reject
    ```
    Promise.resolve(123).then(val => {
      console.log(val);
    });
    Promise.reject(123).then(val => {
      console.log(val);
    }).catch(val => {
      console.log(val)
    });
    ```


