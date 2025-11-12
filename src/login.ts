import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./service/AuthService";
import MongoDBAuthRepository from "./repositories/MongoDBAuthRepository";
import ToastService from "./service/ToastService";

const toastService = new ToastService();
const authRepository = new MongoDBAuthRepository()
const authService = new AuthService(authRepository, toastService);


const loginEmailInput = document.getElementById('loginEmailInput') as HTMLInputElement;
const loginPasswordInput = document.getElementById('loginPasswordInput') as HTMLInputElement;
const loginSubmitBtn = document.getElementById('loginSubmitButton') as HTMLButtonElement;

loginSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault()

    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    void authService.login({email, password});
})
