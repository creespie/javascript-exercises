const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
let total = 0;
arr.map(number => total = total +number);
return total;
	
};

const multiply = function(arr) {
  let total = 1;
  arr.map(number => total = total *number);
  return total;
};

const power = function(number, power) {
	let total = 1;
  while(power >0){
    total = total * number;
    power--;
  }
  return total;
};

const factorial = function(number) {
  total = 1;
  if(number == 0){
    return 1;
  }else{
    while(number > 0){
      total = total * number;
      number--;
    };
    return total;
  };
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
