import type {
    RepositoryInterface,
    RepositoryInterface as TaskRepositoryInterface
} from '../repositories/repositoryInterface';
import TaskComponent from '../components/TaskComponent.js';

export default class TaskService {
  private taskContainer: HTMLElement;
  private repository: TaskRepositoryInterface;
  private taskInput: HTMLInputElement;
  private taskAddBtn: HTMLElement;

    constructor(
        taskContainer: HTMLElement,
        repository: RepositoryInterface,
        taskInput: HTMLInputElement,
        taskAddBtn: HTMLElement,
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
              this.taskInput.value = '';
              this.renderTasks();
          })
      }
  }

  deleteTask(id: number) {
    this.repository.delete(id);
    this.renderTasks();
  }

  // }
  //
  // // UPDATE
  // updateTask(id: number) {
  //     const updateBtn = document.createElement('button');
  //
  //     updateBtn.textContent = 'Update';
  //     updateBtn.classList.add('btn');
  //     updateBtn.classList.add('btn-success');
  //
  //     updateBtn.addEventListener('click', (e) => {
  //         e.preventDefault()
  //         const updatedInput = document.getElementById('taskTitle'+id) as HTMLInputElement;
  //         const newTitle = updatedInput?.value;
  //
  //         if (!newTitle) {
  //             alert('title cannot be empty');
  //             renderTasks();
  //             return;
  //         }
  //
  //         taskManagement.update(id, newTitle);
  //         renderTasks();
  //     })
  //
  //     return updateBtn;
  // }
  //
  //
  // // DELETE
  // deleteTask(id: number) {
  //     const deleteBtn = document.createElement('button');
  //
  //     deleteBtn.textContent = 'Delete';
  //     deleteBtn.classList.add('btn');
  //     deleteBtn.classList.add('btn-danger');
  //
  //     deleteBtn.addEventListener('click', () => {
  //         taskManagement.delete(id);
  //         renderTasks();
  //     })
  //
  //     return deleteBtn;
  // }
}
