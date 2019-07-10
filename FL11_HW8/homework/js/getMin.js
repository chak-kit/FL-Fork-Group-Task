const getMin = (...args) => args.sort((a, b) => a - b)[0];

console.log(getMin(10, 2, 4, 4, -11));