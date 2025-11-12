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

registerSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault()

    const email = registerEmailInput.value;
    const name = registerNameInput.value;
    const password = registerPasswordInput.value;

    authService.register({email, password, name});
})