const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');

userEmailSpan.textContent = email;
userPasswordSpan.textContent = password;
}
  
  // TODO: Retrieve the last email and password and render it to the page

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    displayMessage('success', 'Registered successfully');
console.log(`button press: ${email}`);
console.log(`button press: ${password}`);  
let count = localStorage.getItem('email');

console.log(count)
    // TODO: Save email and password to localStorage and render the last registered user
}renderLastRegistered()  });
