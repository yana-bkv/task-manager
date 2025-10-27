import type { Task } from '../models/Task';

export interface RepositoryInterface {
  create(title: string): void;
  getById(id: number): Task | undefined;
  getAll(): Task[];
  getCurrentTasks(): Task[];
  getDoneTasks(): Task[];
  updateTitle(id: number, title: string): void;
  updateStatus(id: number, isDone: boolean): void;
  delete(id: number): void;
}
