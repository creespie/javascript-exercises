const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0

  )
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  var total = 1
 if(a === 0){
  return total
 }else{
  while (a > 0) {
  total = total * a;
  a--;
  
 }
 return total
}
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