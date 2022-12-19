
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', sendSubmit);

function sendSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return 'Please fill in all the fields!';
    }
    const userDetails = { email: email.value, Password: password.value };
    
    console.log(userDetails);
    event.currentTarget.reset();
}