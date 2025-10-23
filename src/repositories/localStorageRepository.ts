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
        const tasks = this.jsonToParse()
        return tasks.find(task => task.id === id);
    }
    findAll(): Task[] {
       return this.jsonToParse() || [];
    }
    update(id: number, title: string) {
        const tasks = this.jsonToParse();
        const taskToUpdate = tasks.find(task => task.id === id);
        if (taskToUpdate) {
            taskToUpdate.title = title;
        }
        this.jsonToStringify(tasks);
    }
    delete(id: number) {
        let tasks = this.jsonToParse();
        tasks = tasks.filter(task => task.id !== id); // Мы возвращаем массив без элемента который указан в ид
        this.jsonToStringify(tasks);
    }

    protected jsonToParse() :Task[] {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    protected jsonToStringify(tasks :Task[]) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}