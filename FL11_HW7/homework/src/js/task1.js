// let email = prompt('please enter your email');

const MIN_EMAIL_LENGTH = 6;
const MIN_PASS_LENGTH = 5;
let userPass = 'UserPass';
let adminPass = 'AdminPass';

let email = prompt('Please, enter your email: ');
if (email === '' || email === null) {
  alert('Canceled')
} else if (email.length < MIN_EMAIL_LENGTH) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {

  let password = prompt('enter your password');

  if (password === '' || password === null) {
    alert('Canceled')
  }
  if (email === 'user@gmail.com' && password === userPass
    || email === 'admin@gmail.com' && password === adminPass) {
    let doChangePassword = confirm('Do you want to change your password?');
    if (doChangePassword) {
      let isOldPassword = prompt('please, eneter the OLD password')
      if (isOldPassword === '' || isOldPassword === null) {
        alert('Cancelled');
      } else if (isOldPassword === password) {
        password = prompt('enter new password');
        if (password.length < MIN_PASS_LENGTH) {
          alert('t’s too short password. Sorry.');
        } else {
          let newPassword = prompt('re enter the new password');
          if (password === newPassword) {
            alert('you have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      }
    } else {
      alert('you have failed the change');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
