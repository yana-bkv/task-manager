import type {
    RepositoryInterface,
    RepositoryInterface as TaskRepositoryInterface
} from '../repositories/repositoryInterface';
import TaskComponent from '../components/TaskComponent.js';

export default class TaskService {
  private currentTasksContainer: HTMLElement | null;
  private repository: TaskRepositoryInterface;
  private taskInput: HTMLInputElement | null;
  private taskAddBtn: HTMLElement | null;
  private doneTasksContainer: HTMLElement | null;

    constructor(
        currentTasksContainer: HTMLElement | null,
        repository: RepositoryInterface,
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

  renderCurrentTasks() {
    if (this.currentTasksContainer) {
      const tasksStorage = this.repository.getCurrentTasks();

      let allTasksHTML :HTMLDivElement[] = [];

        tasksStorage.forEach((task) => {
            allTasksHTML.push(
                TaskComponent({
                    title: task.title,
                    deleteTask: () => this.deleteTask(task.id),
                    updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
                    status: task.isDone,
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

    renderDoneTasks() {
        if (this.doneTasksContainer) {
            const tasksStorage = this.repository.getDoneTasks();

            let allTasksHTML :HTMLDivElement[] = [];

            tasksStorage.forEach((task) => {
                allTasksHTML.push(
                    TaskComponent({
                        title: task.title,
                        deleteTask: () => this.deleteTask(task.id),
                        updateTask: (newTitle: string) => this.updateTask(task.id, newTitle),
                        status: task.isDone,
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
          this.taskAddBtn.addEventListener('click', () => {
              const newTaskTitle = this.taskInput?.value?.trim();
              if (newTaskTitle) {
                  this.repository.create(newTaskTitle)
              }
              if (this.taskInput) {
                  this.taskInput.value = '';
              }
              this.renderCurrentTasks();
              this.renderDoneTasks();
          })
      }
  }

  deleteTask(id: number) {
    this.repository.delete(id);
    this.renderCurrentTasks();
    this.renderDoneTasks();
  }

  updateTask(id: number, newTitle: string) {
    this.repository.update(id, newTitle);
    this.renderCurrentTasks();
    this.renderDoneTasks();
  }
}
