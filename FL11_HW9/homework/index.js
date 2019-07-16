let magicNum = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

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
console.log(findTypes(null, magicNum.five, 'hello', true));

// 2. Write function, which iterates over array and executes function on each element.
const executeforEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

executeforEach([magicNum.one, magicNum.two, magicNum.three], function (el) {
  console.log(el);
});

// 3. Write function, which returns transformed array based on function,
// which passed as a parameter. Reuse function from task 2.

const mapArray = (array, callback) => {
  let transformedArray = [];
  executeforEach(array, element => {
    transformedArray.push(callback(element));
  });

  return transformedArray;
}

console.log(mapArray([magicNum.four, magicNum.one, magicNum.nine], x => x + magicNum.three));

// 4. Write function, which returns filtered array based on function, which passed as
// a parameter. Reuse function from task 2.

const filterArray = (array, callback) => {
  let filtered = [];
  executeforEach(array, element => {
    if (callback(element)) {
      filtered.push(element);
    }
  })
  return filtered;
}

console.log(filterArray([magicNum.two, magicNum.five, magicNum.eight], (el) => el > magicNum.three));

// 5. Write function, which returns formatted date.
// showFormattedDate(new Date('2019-01-27T01:10:00')) 
// returns ‘Date: Jan 27 2019’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)

const showFormattedDate = date => {
  let month = date.getMonth();

  switch (month) {
    case 0:
      month = 'Jan';
      break;
    case 1:
      month = 'Feb';
      break;
    case magicNum.two:
      month = 'Mar';
      break;
    case magicNum.three:
      month = 'Apr';
      break;
    case magicNum.four:
      month = 'May';
      break;
    case magicNum.five:
      month = 'Jun';
      break;
    case magicNum.six:
      month = 'Jul';
      break;
    case magicNum.seven:
      month = 'Aug';
      break;
    case magicNum.eight:
      month = 'Sep';
      break;
    case magicNum.nine:
      month = 'Oct';
      break;
    case magicNum.nine + magicNum.one:
      month = 'Nov';
      break;
    case magicNum.nine + magicNum.two:
      month = 'Dec';
      break;
    default: undefined;
  }

  return `${month} ${date.getDate()} ${date.getFullYear()}`
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// 6. Write function, which returns Boolean value, is 
// received string parameter can be converted to valid date.

const canConvertToDate = date => {
  let d = new Date(date);
  return JSON.stringify(d) !== 'null';
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

// 7. Write function, which returns difference between two dates in days

const daysBetween = (date1, date2) => {
  return (date2 - date1) / 1000 / 60 / 60 / 24;
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

// 8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7
// getAmountOfAdultPeople(data) // returns 3;

let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

const getAmountOfAdultPeople = data => {
  let now = new Date();
  let older18 = 0;
  console.log(now);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]['birthday']);
    let personBirthday = new Date(data[i]['birthday']);
    console.log((now - personBirthday) / 1000 / 60 / 60 / 24 / 365 >= 18);
    if ((now - personBirthday) / 1000 / 60 / 60 / 24 / 365 >= 18) {
    
      older18 += 1;
    }
  }
  return older18;
}

console.log(getAmountOfAdultPeople(data));

// 9. Write function, which returns array of keys of an object.

const keys = obj => Object.keys(obj);

console.log(keys(data[0]));

// 10. Write function, which returns array of values of an object.

const values = obj => Object.values(obj);

console.log(values(data[0]));