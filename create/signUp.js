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

        if (!passwordInput.value || passwordInput.value.length < 6) {
            passwordError.hidden = false;
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        } else {
            passwordError.hidden = true;
        }

        if (valid) {
            auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
                .then((userCredential) => {
                    window.location.href = '../login/login.html';
                })
                .catch((error) => {
                    passwordError.hidden = false;
                    passwordError.textContent = error.message;
                });
        }
    });
});
