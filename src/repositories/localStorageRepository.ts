import type {RepositoryInterface} from "./repositoryInterface";
import type {Task} from "../models/Task";

export class LocalStorageRepository implements RepositoryInterface {
    create(taskTitle :string) {
        const tasks = this.jsonToParse();
        const isCreated = tasks.some((task: Task)  => task.title === taskTitle);
        if (isCreated) {
            return
        }
        const newId = this.createId(tasks);
        tasks.push({id: newId, title: taskTitle});
        this.jsonToStringify(tasks);
    }
    findById(id: number): Task | undefined {
        const tasks = this.jsonToParse()
        return tasks.find(task => task.id === id);
    }
    findAll(): Task[] {
       return this.jsonToParse() || [];
    }
    update(id: number, newTitle: string) {
        const tasks = this.jsonToParse();
        const taskToUpdate = tasks.find(task => task.id === id);
        if (!taskToUpdate) {
            return
        }
        taskToUpdate.title = newTitle;

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

    protected createId(tasks :Task[]) :number {
        const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
        return maxId + 1;
    }
}