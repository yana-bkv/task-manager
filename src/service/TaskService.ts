import type {
    RepositoryInterface,
    RepositoryInterface as TaskRepositoryInterface
} from '../repositories/repositoryInterface';
import TaskComponent from '../components/TaskComponent.js';

export default class TaskService {
  private taskContainer: HTMLElement | null;
  private repository: TaskRepositoryInterface;
  private taskInput: HTMLInputElement | null;
  private taskAddBtn: HTMLElement | null;

    constructor(
        taskContainer: HTMLElement | null,
        repository: RepositoryInterface,
        taskInput: HTMLInputElement | null,
        taskAddBtn: HTMLElement | null,
    ) {
    this.taskContainer = taskContainer;
    this.repository = repository;
    this.taskInput = taskInput;
    this.taskAddBtn = taskAddBtn;
  }

  renderTasks() {
    if (this.taskContainer) {
      const tasksStorage = this.repository.findAll();

      let allTasksHTML :HTMLDivElement[] = [];

      tasksStorage.forEach((task) => {
        allTasksHTML.push(TaskComponent(task.title, () => this.deleteTask(task.id)));
      });

      this.taskContainer.innerHTML = '';
      this.taskContainer.append(...allTasksHTML);
    }
  }

  createAddTaskEvent() {
      if (this.taskAddBtn) {
          this.taskAddBtn.addEventListener('click', () => {
              const newTaskTitle = this.taskInput?.value?.trim();
              if (newTaskTitle) {
                  this.repository.create(newTaskTitle)
              }
              if (this.taskInput) {
                  this.taskInput.value = '';
              }
              this.renderTasks();
          })
      }
  }

  deleteTask(id: number) {
    this.repository.delete(id);
    this.renderTasks();
  }

}
