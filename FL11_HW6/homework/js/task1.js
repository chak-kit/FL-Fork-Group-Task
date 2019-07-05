const a1 = prompt('enter x for point A');
const a2 = prompt('enter y for point A');
const b1 = prompt('enter x for point B');
const b2 = prompt('enter y for point B');
const c1 = prompt('enter x for point C');
const c2 = prompt('enter y for point C');

const DIVIDE_BY_TWO = 2;

const isMidpoint = (+a1 + +b1) / DIVIDE_BY_TWO === +c1 && (+a2 + +b2) / DIVIDE_BY_TWO === +c2;

alert('user midpoint result: ' + isMidpoint);