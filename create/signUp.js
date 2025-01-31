
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    if (!emailInput.value || !emailInput.value.includes('@')) {
    emailError.hidden = false;
    valid = false;
} else {
    emailError.hidden = true;
}

    if (!passwordInput.value) {
    passwordError.hidden = false;
    valid = false;
} else {
    passwordError.hidden = true;
}

    if (valid) {
    window.location.href = '../login/login.html'
}
});
});
