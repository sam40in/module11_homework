function integer(n){
    if (n <= 0 || n > 1000) {
      return "Не удовлетворяет условиям";
    }
    if (n === 1) {
      return "Простое число";
    }
    if (n === 2) {
      return "Простое число";
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return "Непростое число";
      }
    }
    return "Простое число";
  }
  
  console.log(integer(53));
  