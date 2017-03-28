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
//3.
p.then(val => {
  console.log('resolve', val);
}, val => {
  console.log('reject', val);
});
p.catch(val => console.log(`catch val is ${val}`));
```






