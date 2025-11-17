import type {User} from "../models/User";
import type {AuthLoginBody, AuthRegisterBody, AuthRepositoryInterface} from "../repositories/AuthRepositoryInterface";
import type ToastServiceInterface from "./ToastService";
import {AxiosError} from "axios";

interface AuthServiceInterface {
    currentUser: User | undefined
    login(body: AuthLoginBody): Promise<void>
    register(body: AuthRegisterBody): Promise<void>
}

export default class AuthService implements AuthServiceInterface {
    currentUser : User | undefined = undefined
    constructor(private repository: AuthRepositoryInterface, private toastService: ToastServiceInterface) {}

    async login(body: AuthLoginBody) {
        try {
            const user = await this.repository.login(body);
            if (user) {
                this.currentUser = user
                this.toastService.showSuccess("Welcome, " + (user.name || user.email) + "")
            }
        }
        catch (error: {message: string} | Error | unknown) {
            if (error instanceof AxiosError && error?.response?.data?.message) {
                this.toastService.showError(error.response.data.message)
            } else {
                this.toastService.showError("Login failed")
            }
        }
    }

    async register(body: AuthRegisterBody) {
        try {
            const user = await this.repository.register(body);
            if (user) {
                this.currentUser = user
                this.toastService.showSuccess("Successfully registered, " + (user.name || user.email) + "")
                window.location.href = '/login.html?fromRegister=true&registerEmail=' + user.email;
            }
        }
        catch (error: {message: string} | Error | unknown) {
            if (error instanceof AxiosError && error?.response?.data?.message) {
                this.toastService.showError(error.response.data.message)
            } else {
                this.toastService.showError("Registration failed")
            }
        }
    }
}