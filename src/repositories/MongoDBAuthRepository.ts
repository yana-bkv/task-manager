import type {AuthLoginBody, AuthRepositoryInterface, AuthRegisterBody} from './AuthRepositoryInterface';
import axios from "axios";
import type {User} from "../models/User";

const BASE_URL = `${process.env.API_URL}/api/auth` || 'http://localhost:4000/api/auth'

export default class MongoDBAuthRepository implements AuthRepositoryInterface {

    async login(body: AuthLoginBody): Promise<User> {
        const response = await axios.post(`${BASE_URL}/login`, body)
        return response.data
    }

    async register(body: AuthRegisterBody): Promise<User> {
        const response = await axios.post(`${BASE_URL}/register`, body)
        return response.data
    }
}
