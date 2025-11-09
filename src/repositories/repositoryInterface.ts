import type { Task } from '../models/Task';

export interface LocalStorageRepositoryInterface {
  create(title: string): void;
  getById(id: number): Task | undefined;
  getAll(): Task[];
  getCurrentTasks(): Task[];
  getDoneTasks(): Task[];
  updateTitle(id: number, title: string): void;
  updateStatus(id: number, isDone: boolean): void;
  delete(id: number): void;
}

export interface MongoDBTaskRepositoryInterface {
    getAll(): Promise<Task[]>;
    getDoneTasks(): Promise<Task[]>;
    getCurrentTasks(): Promise<Task[]>;
    create(title: string): Promise<void>;
    updateTitle(id: number, title: string): Promise<void>;
    updateStatus(id: number, isDone: boolean): Promise<void>;
    delete(id: number): Promise<void>;
}
