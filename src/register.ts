import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./service/AuthService";
import MongoDBAuthRepository from "./repositories/MongoDBAuthRepository";
import ToastService from "./service/ToastService";

const toastService = new ToastService();
const authRepository = new MongoDBAuthRepository()
const authService = new AuthService(authRepository, toastService);

const registerEmailInput = document.getElementById('registerEmailInput') as HTMLInputElement;
const registerNameInput = document.getElementById('registerNameInput') as HTMLInputElement;
const registerPasswordInput = document.getElementById('registerPasswordInput') as HTMLInputElement;
const registerSubmitBtn = document.getElementById('registerSubmitButton') as HTMLButtonElement;
const registerEmailInvalidFeedback = document.getElementById('registerEmailInvalidFeedback') as HTMLElement;
const registerPasswordInvalidFeedback = document.getElementById('registerPasswordInvalidFeedback') as HTMLElement;

function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function checkMinLength(str: string, minLength: number) {
    return str.length >= minLength;
}

registerEmailInput?.addEventListener('keyup', () => {
    if (registerEmailInput.classList.contains('is-invalid')) {
        registerEmailInput.classList.remove('is-invalid')
    }
})

registerPasswordInput?.addEventListener('keyup', () => {
    if (registerPasswordInput.classList.contains('is-invalid')) {
        registerPasswordInput.classList.remove('is-invalid')
    }
})

registerSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault()

    const email = registerEmailInput.value.trim();
    const name = registerNameInput.value.trim();
    const password = registerPasswordInput.value.trim();

    if (!email) {
        registerEmailInput.classList.add('is-invalid')
        registerEmailInvalidFeedback.innerText = 'Email is required'
        return
    }

    if (!isEmailValid(email)) {
        registerEmailInput.classList.add('is-invalid')
        registerEmailInvalidFeedback.innerText = 'Invalid email'
        return
    }

    if (!password) {
        registerPasswordInput.classList.add('is-invalid')
        registerPasswordInvalidFeedback.innerText = 'Password is required'
        return
    }

    if (!checkMinLength(password, 8)) {
        registerPasswordInput.classList.add('is-invalid')
        registerPasswordInvalidFeedback.innerText = 'Password must be 8 characters long'
        return
    }

    authService.register({email, password, name});
})