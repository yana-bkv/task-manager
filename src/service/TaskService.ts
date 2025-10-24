import type { RepositoryInterface as TaskRepositoryInterface } from '../repositories/repositoryInterface';
// import TaskComponent from '../components/TaskComponent';

export default class TaskService {
  private taskContainer: HTMLElement | null;
  private repository: TaskRepositoryInterface;

  constructor(
    taskContainer: HTMLElement | null,
    repository: TaskRepositoryInterface,
  ) {
    this.taskContainer = taskContainer;
    this.repository = repository;
  }

  renderTasks() {
    if (this.taskContainer) {
      const tasksStorage = this.repository.findAll();

      let allTasksHTML = '';

      tasksStorage.forEach((task) => {
        allTasksHTML += `<div class="container-md mb-3 task">${task.title}</div>`;
      });

      this.taskContainer.innerHTML = allTasksHTML;
    }
  }

  // CREATE
  // createTask() {
  //     const addBtn = document.getElementById('addButton');
  //     const input = document.getElementById('taskTitle') as HTMLInputElement;
  //
  //     addBtn?.addEventListener('click', function(e) {
  //         e.preventDefault();
  //
  //         const taskTitle :string  = input.value;
  //         if (!taskTitle) {
  //             return
  //         }
  //         this.repository.create(taskTitle);
  //         input.value = '';
  //
  //         renderTasks();
  //     })
  //
  // }
  // SHOW ALL

  // showTasks() {
  //
  //     tasksStorage.forEach(task=>{
  //         const taskElement = document.createElement('div');
  //         const taskTitle = document.createElement('input');
  //
  //         taskElement.classList.add('container-md');
  //         taskElement.classList.add('mb-3');
  //         taskElement.classList.add('task');
  //         taskTitle.classList.add('taskTitle');
  //         taskTitle.id = `taskTitle${task.id}`;
  //
  //         const deleteBtn = deleteTask(task.id);
  //         const updateBtn = updateTask(task.id);
  //
  //         taskTitle.value = task.title;
  //         taskElement?.append(taskTitle);
  //         taskElement?.append(updateBtn);
  //         taskElement?.append(deleteBtn);
  //         this.taskContainer?.append(taskElement)
  //     })
  //
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
