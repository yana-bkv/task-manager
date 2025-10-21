import type {Task} from "../models/Task";

interface RepositoryInterface {
    create(task: Task): void;
    findById(id: number): Task;
    findAll(): Task[];
    update(id: number): void;
    delete(id: number): void;
}