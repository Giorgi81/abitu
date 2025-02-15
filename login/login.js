const firebaseConfig = {
    apiKey: "AIzaSyCf2V8BWPCvsQEjgzQ1_FC4crbBog99UlU",
    authDomain: "abitu-10865.firebaseapp.com",
    projectId: "abitu-10865",
    storageBucket: "abitu-10865.firebasestorage.app",
    messagingSenderId: "643003315940",
    appId: "1:643003315940:web:e743df891630b0c0b51ef1",
    measurementId: "G-ZR4RKHKVYZ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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

            auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
                .then((userCredential) => {
                    window.location.href = '../main/main.html';
                })
                .catch((error) => {
                    loginError.hidden = false;
                    loginError.textContent = error.message;
                });
        } else {
            loginError.hidden = false;
        }
    });

    document.getElementById('createAccount').addEventListener('click', () => {
        window.location.href = '../create/signUp.html';
    });
});
