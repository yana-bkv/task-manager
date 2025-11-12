import type {User} from "../models/User";

export interface AuthRepositoryInterface {
    login(body: AuthLoginBody): Promise<User>;
    register(body: AuthRegisterBody): Promise<User>;
}

export interface AuthLoginBody {
    email: string;
    password: string;
}

export interface AuthRegisterBody {
    email: string;
    password: string;
    name: string;
}