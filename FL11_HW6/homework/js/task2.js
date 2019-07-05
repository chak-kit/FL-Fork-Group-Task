const a = prompt('enter triangles length side A');
const b = prompt('enter triangles length side B');
const c = prompt('enter triangles length side C');

if (
  +a < +b + +c
  & +b < +c + +a
  & +c < +b + +a
  & +a > 0
  & +b > 0
  & +c > 0) {
  if (a === b & b === c & c === a) {
    alert('Eequivalent triangle');
  } else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
  } else {
    alert('Normal triangle');
  }
} else {
  alert('Triangle doesn’t exist');
}

