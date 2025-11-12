import type {TaskRepositoryInterface} from './TaskRepositoryInterface';
import type { Task } from '../models/Task';
import axios from "axios";

const BASE_URL = `${process.env.API_URL}/api/tasks` || 'http://localhost:4000/api/tasks'

export default class MongoDBTaskRepository implements TaskRepositoryInterface {
    async getAll(): Promise<Task[]> {
        const response = await axios.get(BASE_URL)
        return response.data
    }

    async getCurrentTasks(): Promise<Task[]> {
        const response = await axios.get(`${BASE_URL}/pending`)
        return response.data
    }

    async getDoneTasks(): Promise<Task[]>{
        const response = await axios.get(`${BASE_URL}/done`)
        return response.data
    }

    async create(taskTitle: string) {
        await axios.post(BASE_URL, {
            title: taskTitle
        })
    }

    async updateTitle(id: number, newTitle: string) {
        await axios.patch(`${BASE_URL}/${id}/title`, {
            title: newTitle
        })
    }

    async updateStatus(id: number, isDone: boolean) {
        await axios.patch(`${BASE_URL}/${id}/status`, {
            isDone: !isDone
        })
    }

    async delete(id: number) {
        await axios.delete(`${BASE_URL}/${id}`)
    }
}
