import LocalStorageRepository from './repositories/localStorageRepository.js';
import TaskService from './service/TaskService.js';

const currentTasksContainer = document.getElementById('currentTasksContainer');
const taskInput  = document.getElementById('taskInput') as HTMLInputElement;
const taskAddBtn = document.getElementById('taskAddBtn');
const doneTasksContainer = document.getElementById('doneTasksContainer');

const localStorageTaskRepository = new LocalStorageRepository();
const taskService = new TaskService(currentTasksContainer, localStorageTaskRepository, taskInput, taskAddBtn, doneTasksContainer);

taskService.renderCurrentTasks();
taskService.renderDoneTasks();
taskService.createAddTaskEvent();
