// let email = prompt('please enter your email');

const MIN_EMAIL_LENGTH = 7;

const checkLogin = email => {
  if (email === '' || email === null) return 'Canceled';
  if (email.lehgth < MIN_EMAIL_LENGTH) return 'I don\'t know any emails having name length less than 6 symbols';
  if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('enter your password');
    if (password === '' || password === null) console.log('Canceled');
    if (email === 'user@gmail.com' && password === 'UserPass' || email === 'admin@gmail.com')
  }
}

console.log(checkLogin(''));
console.log(checkLogin(null));