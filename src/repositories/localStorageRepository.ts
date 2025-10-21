import type {RepositoryInterface} from "./repositoryInterface";
import type {Task} from "../models/Task";

export class LocalStorageRepository implements RepositoryInterface {
    create(newTask: Task) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const isCreated = tasks.some((task: Task)  => task.id === newTask.id);
        if (isCreated) {
            return
        }
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    findById(id: number): Task | undefined {
        return undefined;
    }
    findAll(): Task[] {
        return [];
    }
    update(id: number) {

    }
    delete(id: number) {

    }
}