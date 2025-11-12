import type {Task} from "../models/Task";

export interface TaskRepositoryInterface {
    getAll(): Promise<Task[]>;
    getDoneTasks(): Promise<Task[]>;
    getCurrentTasks(): Promise<Task[]>;
    create(title: string): Promise<void>;
    updateTitle(id: number, title: string): Promise<void>;
    updateStatus(id: number, isDone: boolean): Promise<void>;
    delete(id: number): Promise<void>;
}
