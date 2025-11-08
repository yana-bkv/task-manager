import type {MongoDBTaskRepositoryInterface} from './repositoryInterface';
import type { Task } from '../models/Task';
import axios from "axios";

export default class MongoDBTaskRepository implements MongoDBTaskRepositoryInterface {
    async getAll(): Promise<Task[]> {
        const response = await axios.get('http://localhost:4000/api/tasks')
        return response.data
    }

    async getCurrentTasks(): Promise<Task[]> {
        const response = await axios.get('http://localhost:4000/api/tasks/pending')
        return response.data
    }

    async getDoneTasks(): Promise<Task[]>{
        const response = await axios.get('http://localhost:4000/api/tasks/done')
        return response.data
    }

    async create(taskTitle: string) {
        await axios.post('http://localhost:4000/api/tasks', {
            title: taskTitle
        })
    }

    async updateTitle(id: number, newTitle: string) {
        await axios.patch(`http://localhost:4000/api/tasks/${id}/title`, {
            title: newTitle
        })
    }

    async updateStatus(id: number, isDone: boolean) {
        await axios.patch(`http://localhost:4000/api/tasks/${id}/status`, {
            isDone: !isDone
        })
    }

    async delete(id: number) {
        await axios.delete(`http://localhost:4000/api/tasks/${id}`)
    }
}
