const reverseNumber = num => {
  let result = num;
  result > 0 ? result : result = -result;
  result = result.toString().split('').reverse().join('')
  return num > 0 ? result : -result;
}

console.log(reverseNumber(-123));