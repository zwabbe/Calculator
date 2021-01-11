
//This function is telling it to take Number1 and Number2 and minus them//
function subtract(number1, number2) {
    return number1 - number2;
  }
  

  // The parameters of the function  // 
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  //to take those results and run the function THEN display the results of the function //
  const result = subtract(number1, number2);
  alert(result);


/*  
  function add(number1, number2) {
    return number1 + number2;
  }
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result = add(number1, number2);
  alert(result);

 Find the difference using 
  function diff(number1, number2) {
    return number1 % number2;
  }
 const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result = diff(number1, number2);
  alert(result);

  function add(number1, number2) {
    return number1 + number2;
  }
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result = add(number1, number2);
  alert(result);
  */