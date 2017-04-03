## buffer
1. buffer.from(sting,encoding)
  ```
  let buf1 = Buffer.from(encodingTest, 'utf8');

  console.log(buf1)//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

  let buf2 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64]);//hello world

  console.log(buf2.toString('utf8'))
  ```
  - 汉子需要3位buffer来标识
  ```
  let test="窗";
   console.log(Buffer.from(test));//<Buffer e7 aa 97>
  ```
2. buffer.concat(list[,totallength]),将buffer合并
    ```
    let test = '窗';
    let buf3 = Buffer.from([0xe7]);
    let buf4 = Buffer.from([0xaa]);
    let buf5 = Buffer.from([0x97]);
    console.log(Buffer.concat([buf3,buf4,buf5],3).toString());//
    ```

3. buffer的应用场景
    ```
    let data = fs.createReadStream('./tmp', {
      highWaterMark: 1 //每次读取一位buffer
    });
    let out = '';// out=out.toString() + chunk.toSting()
    data.on('data', (chunk) => {
        out += chunk
    }).on('end', () => {
      console.log(out);//乱码
    });
    ```
合理的方法是使用数组添加chunk，然后用concat拼接buffer
    ```
    let data = fs.createReadStream('./tmp', {
      highWaterMark: 1
    });
    let out = [];
    data.on('data', (chunk) => {
      out.push(chunk)
    }).on('end', () => {
      console.log(Buffer.concat(out).toString());
    });
    ```
