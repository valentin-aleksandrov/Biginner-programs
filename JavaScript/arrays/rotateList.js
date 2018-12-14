const getGets = (arr) => {
    let index = 0;
  
    return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
    };
  };
  
  // This is the place where you must place your test data
  const test = [
    '2,1,3,4',
    '5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  function rotateElements(arr){
      let firstElement = arr[0];
      for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
      }
      arr[arr.length-1] = firstElement;
    //   print(arr);
      return arr;
  }

  let arr = [];
  let inputArr = gets().split(',');

  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  const n = Number(gets());

  for(let i = 0; i < n; i++){
      arr = rotateElements(arr);
  }
  
  let result = '';
  for(let i = 0; i < arr.length-1; i++){
      result += arr[i] + ',';  
  }
  result += arr[arr.length-1];
  print(result);