import type {Task} from "../models/Task";

export interface RepositoryInterface {
    create(task: Task): void;
    findById(id: number): Task | undefined;
    findAll(): Task[];
    update(id: number): void;
    delete(id: number): void;
}