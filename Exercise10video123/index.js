//declaratino the variable
const a = 1;
const b = 2;
const c = 3;
console.log("initialization variable ");
console.log(" a is ", a, "\n b is : ", b, "\n c is : ", c);

//definition the main functio
function maxNumber(num1, num2) {
  return num1 > num2 ? num1 : num1 < num2 ? num2 : num1;
}

// Declaration value for saving result
let result = 0;

// test one
console.log("test one ");
result = maxNumber(a, b);
result = maxNumber(result, c);
console.log("result comparison for valuse a and b is : ");
console.log(result);

// reset the value
num1 = 1;
num2 = 1;
num3 = 1;

//test two
result = maxNumber(num1, num2);
result = maxNumber(result, num3);
console.log(result);

// reset the value
num1 = 300;
num2 = 200;
num3 = 100;

// test three
result = maxNumber(num1, num2);
result = maxNumber(result, num3);
console.log(result);

// reset the value

num1 = 200;
num2 = 300;
num3 = 100;

// test four
result = maxNumber(num1, num2);
result = maxNumber(result, num3);
console.log(result);
