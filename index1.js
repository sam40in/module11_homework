function getEvenOrOddElements(){
    let arr = ["forest", "tree", "high_mountain", 223, 4217, false, null, 21, 20, 30];
    let evenElements = 0
    let oddElements = 0
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'number') {
         if (arr[i] % 2 == 0) {
           evenElements += 1;
        } else if (arr[i] % 2 !== 0) {
           oddElements +=1;
        }
      }  
    }
    console.log(`Четных элементов: ${evenElements}`);
    console.log(`Нечётных элементов: ${oddElements}`);
  };
  
  getEvenOrOddElements();
  