import LocalStorageRepository from './repositories/localStorageRepository.js';
import TaskService from './service/TaskService.js';

const tasksContainer = document.getElementById('tasksContainer');
const taskInput  = document.getElementById('taskInput') as HTMLInputElement;
const taskAddBtn = document.getElementById('taskAddBtn');

const localStorageTaskRepository = new LocalStorageRepository();
const taskService = new TaskService(tasksContainer, localStorageTaskRepository, taskInput, taskAddBtn);

taskService.renderTasks();
taskService.createAddTaskEvent();
