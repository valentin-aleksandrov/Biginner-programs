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
    '21'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4


  let inputLine = gets();
//   print(inputLine);
  let arr = inputLine.split(' ');

  arr.forEach(function (celsius, index) {
	let fahrenheit = (celsius * 9/5) + 32;
	print(fahrenheit);
  });


