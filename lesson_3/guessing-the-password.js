var password = 'password';
var attempts = 0;

while (attempts < 3) {
  var guess = prompt('What is the password:');

  if (guess === password) {
    console.log('You have successfully logged in.');
    break;
  }
   
  attempts++;

  if (attempts === 3) {
    console.log('You have been denied access.');
  }
}