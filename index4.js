function row(a, b) {
    let firstNumber = a;
    let interval = setInterval(function() {
      console.log(firstNumber);
      if (firstNumber == b) {
        clearInterval(interval);
      }
      firstNumber++;
    }, 1000);
  };
  row(5, 15);
  