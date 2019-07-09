const DIVIDE_BY_TWO = 2;
const ROUNDS = 3;
let trys = 3;
let maxNum = 8;
let increasor = 4;
let initialPrize = 100;
let win = 0;


let keepOn = confirm('Do you want to play a game?');

if (keepOn) {
  while (keepOn) {
    let roundPrize = initialPrize;
    let rand = Math.floor(Math.random() * maxNum + Math.random());
    for (let i = 0; i < ROUNDS; i++) {
      console.log(rand);
      let guess = prompt(`Guess num from 0 (included) and ${maxNum} (included) `);
      
      if (rand === +guess) {
        win += roundPrize;
        keepOn = confirm(`Congratulation, you won! Your prize is: ${win}$. Do you want to continue?`);

        if (!keepOn) {
          alert(`Thank you for your participation. Your prize is: $${win}`);
          let again = confirm('Do you want to play again?')
          if (!again) {
            alert(`Thank you for gambling, your win is $${win}`);
          } else {
            maxNum += increasor;
          }
        }
      } else {
        keepOn = false;
      }
      roundPrize /= DIVIDE_BY_TWO;

    }
    keepOn = false;
  }
} else {
  console.log('You did not become a billionaire, but could');
}




