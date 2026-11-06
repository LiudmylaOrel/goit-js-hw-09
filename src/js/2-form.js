const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const formState = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  const name = event.target.name;
  const value = event.target.value.trim();

  formState[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  formState.email = state.email || '';
  formState.message = state.message || '';
  emailInput.value = formState.email;
  messageTextarea.value = formState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formState.email === '' || formState.message === '') {
    alert(`Fill please all fields`);
    return;
  } else {
    console.log(formState);
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();

  formState.email = '';
  formState.message = '';
});
