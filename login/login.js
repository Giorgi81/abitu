document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', (event) => {
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
            loginError.hidden = true;
            window.location.href = '../main/main.html';
        } else {
            loginError.hidden = false;
        }
    });

    document.getElementById('createAccount').addEventListener('click', () => {
        window.location.href = '../create/signUp.html';
    });
});
