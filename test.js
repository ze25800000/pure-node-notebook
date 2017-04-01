fn1 = (x) => {
  return Promise.resolve({
    then: (resolve, reject) => {
      console.log(x);
      resolve();
    }
  })
};

fn1(10)
  .then(() => {
    console.log(123); //报错
  });
