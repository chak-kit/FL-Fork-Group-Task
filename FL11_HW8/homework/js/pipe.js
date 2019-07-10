const addOne = x => x + 1;

const pipe = (arg, ...functions) => {
  console.log(functions);

  let reduceer = functions.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
    return accumulator + currentValue;
  });

  console.log(reduceer);
  return reduceer;
}

console.log(pipe(2, addOne, addOne, addOne));