const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  const name = event.target.name;
  const value = event.target.value.trim();

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  formData.email = state.email || '';
  formData.message = state.message || '';
  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert(`Fill please all fields`);
    return;
  } else {
    console.log(formData);
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();

  formData.email = '';
  formData.message = '';
});
