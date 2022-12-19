const inputValidation = document.querySelector('#validation-input');

const inputValidationlength = inputValidation.dataset.length;

const input = document.querySelector('input');
inputValidation.addEventListener('input', e => {

  if ( e.target.value.length === + inputValidationlength) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
  }
});