import _ from 'lodash';

const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const btn = document.querySelector("button[type='submit']");

let throttled = _.throttle(setInputs, 500);

updateInputs();
emailInput.addEventListener('input', throttled);
messageInput.addEventListener('input', throttled);
btn.addEventListener('click', event => {
  btnClicked(event);
});

function setInputs() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
}

function updateInputs() {
  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = obj.email != null ? obj.email : '';
  messageInput.value = obj.message != null ? obj.message : '';
}

function btnClicked(event) {
  event.preventDefault();
  emailInput.value = '';
  messageInput.value = '';
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
