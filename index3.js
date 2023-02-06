function getSum (a) {
    return function summond (b) {
      return a + b;
    }
  }
  
  console.log(getSum(12)(13));
  