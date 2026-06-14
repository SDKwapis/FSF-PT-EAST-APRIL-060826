const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const stored = document.querySelector('#stored');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
const user = {
  first: firstNameInput.value,
  last: lastNameInput.value, 
  email: emailInput.value,
  password: passwordInput.value,
};
  // TODO: Set new submission to local storage
localStorage.setItem('user', JSON.stringify(user));
renderStored();
});

function renderStored() {
  const lastStored = JSON.parse(localStorage.getItem('user'));
  stored.textContent = lastStored
};