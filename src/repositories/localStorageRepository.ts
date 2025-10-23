import type {RepositoryInterface} from "./repositoryInterface";
import type {Task} from "../models/Task";

export class LocalStorageRepository implements RepositoryInterface {
    create(newTask: Task) {
        const tasks = this.jsonToParse();
        const isCreated = tasks.some((task: Task)  => task.id === newTask.id);
        if (isCreated) {
            return
        }
        tasks.push(newTask);
        this.jsonToStringify(tasks);
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

    protected jsonToParse() :Task[] {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    protected jsonToStringify(tasks :Task[]) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}