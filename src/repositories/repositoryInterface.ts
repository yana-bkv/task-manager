import type { Task } from '../models/Task';

export interface RepositoryInterface {
  create(title: string): void;
  getById(id: number): Task | undefined;
  findAll(): Task[];
  update(id: number, title: string): void;
  delete(id: number): void;
}
