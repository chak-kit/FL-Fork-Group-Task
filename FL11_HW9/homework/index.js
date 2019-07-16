// 0. Write function, which returns array of numbers from string parameter

const getNumbers = str => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result.push(+str[i]);
    }

  }
  return result;
}

console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

// 1. Write a function that could receive different amount of parameters (n1, n2, ...n) 
// that have different data types (string, number, boolean, etc.) and returns an object 
// where keys are data types of received parameters and value are their count. 

const FIVE = 5;
const findTypes = (...arg) => {
  let obj = {};
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === null) {
      obj[typeof arg[i]] = 1;
    } else if (typeof arg[i] === 'boolean') {
      obj.boolean = 1;
    } else if (!isNaN(arg[i])) {
      obj[typeof arg[i]] = +arg[i].toString();
    } else {
      obj[typeof arg[i]] = arg[i].length;
    }
  }
  return obj;
}

console.log(findTypes('number'));
console.log(findTypes(null, FIVE, 'hello', true));

// 2. Write function, which iterates over array and executes function on each element.
const executeforEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    console.log(callback(array[i]));
  }
}

// const addOne = x => x + 1;
// const powTwo = x => x * x;
// let arr = [5, 2, 3];

// executeforEach(arr, addOne);
// executeforEach(arr, powTwo);
// executeforEach(arr, console.log)
executeforEach([1, 2, 3], function (el) {
  console.log(el);
});

// 3. Write function, which returns transformed array based on function,
// which passed as a parameter. Reuse function from task 2.

const mapArray = (thisArg, callback) => {
  
}

mapArray([2, 5, 8], function(el) { 
  return el + 3; 
})