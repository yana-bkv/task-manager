import type {
    MongoDBTaskRepositoryInterface,
} from '../repositories/repositoryInterface';
import TaskComponent from '../components/TaskComponent.js';
import MongoDBTaskRepository from "../repositories/MongoDBTaskRepository.js";

export default class TaskService {
  private currentTasksContainer: HTMLElement | null;
  private repository: MongoDBTaskRepository;
  private taskInput: HTMLInputElement | null;
  private taskAddBtn: HTMLElement | null;
  private doneTasksContainer: HTMLElement | null;

    constructor(
        currentTasksContainer: HTMLElement | null,
        repository: MongoDBTaskRepositoryInterface,
        taskInput: HTMLInputElement | null,
        taskAddBtn: HTMLElement | null,
        doneTasksContainer: HTMLElement | null,
    ) {
    this.currentTasksContainer = currentTasksContainer;
    this.repository = repository;
    this.taskInput = taskInput;
    this.taskAddBtn = taskAddBtn;
    this.doneTasksContainer = doneTasksContainer;
  }

  async renderCurrentTasks() {
    if (this.currentTasksContainer) {
      const tasksStorage = await this.repository.getCurrentTasks();

      let allTasksHTML :HTMLDivElement[] = [];

        tasksStorage.forEach((task) => {
            allTasksHTML.push(
                TaskComponent({
                    title: task.title,
                    deleteTask: () => this.deleteTask(task.id),
                    updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
                    status: task.isDone,
                    updateStatus: () => this.updateTaskStatus(task.id, task.isDone),
                })
            );
        });

      if (tasksStorage.length > 0) {
          this.currentTasksContainer.innerHTML = '';
          this.currentTasksContainer.append(...allTasksHTML);
      } else {
          this.currentTasksContainer.innerHTML = 'No tasks';
      }
    }
  }

    async renderDoneTasks() {
        if (this.doneTasksContainer) {
            const tasksStorage = await this.repository.getDoneTasks();

            let allTasksHTML :HTMLDivElement[] = [];

            tasksStorage.forEach((task) => {
                allTasksHTML.push(
                    TaskComponent({
                        title: task.title,
                        deleteTask: () => this.deleteTask(task.id),
                        updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
                        status: task.isDone,
                        updateStatus: () => this.updateTaskStatus(task.id, task.isDone),
                    })
                );
            });

            this.doneTasksContainer.innerHTML = '';
            if (allTasksHTML.length > 0) {
                this.doneTasksContainer.append(...allTasksHTML);
            } else {
                this.doneTasksContainer.innerHTML = 'No tasks';
            }
        }
    }

  createAddTaskEvent() {
      if (this.taskAddBtn) {
          this.taskAddBtn.addEventListener('click', async () => {
              const newTaskTitle = this.taskInput?.value?.trim();
              if (newTaskTitle) {
                 await this.repository.create(newTaskTitle)
              }
              if (this.taskInput) {
                  this.taskInput.value = '';
              }
              await this.renderCurrentTasks();
              await this.renderDoneTasks();
          })
      }
  }

  async deleteTask(id: number) {
      await this.repository.delete(id);
      await this.renderCurrentTasks();
      await this.renderDoneTasks();
  }

  async updateTask(id: number, newTitle: string) {
      await this.repository.updateTitle(id, newTitle);
      await this.renderCurrentTasks();
      await this.renderDoneTasks();
  }

  async updateTaskStatus(id: number, isDone: boolean) {
      await  this.repository.updateStatus(id, isDone);
      await  this.renderCurrentTasks();
      await  this.renderDoneTasks();
  }
}
