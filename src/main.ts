import LocalStorageRepository from './repositories/localStorageRepository.js';
import TaskService from "./service/TaskService.js";

const tasksContainer = document.getElementById('tasksContainer');

const localStorageTaskRepository = new LocalStorageRepository();
const taskService = new TaskService(tasksContainer, localStorageTaskRepository);

taskService.renderTasks();