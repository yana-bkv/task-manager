// import LocalStorageRepository from './repositories/localStorageRepository.js';
import TaskService from './service/TaskService.js';
import MongoDBTaskRepository from "./repositories/MongoDBTaskRepository";
import "bootstrap/dist/css/bootstrap.min.css";
// import LocalStorageRepository from "./repositories/localStorageRepository";

const currentTasksContainer = document.getElementById('currentTasksContainer');
const taskInput  = document.getElementById('taskInput') as HTMLInputElement;
const taskAddBtn = document.getElementById('taskAddBtn');
const doneTasksContainer = document.getElementById('doneTasksContainer');

// const localStorageTaskRepository = new LocalStorageRepository();
const mongodbTaskRep = new MongoDBTaskRepository();

const taskService = new TaskService(currentTasksContainer, mongodbTaskRep, taskInput, taskAddBtn, doneTasksContainer);

taskService.renderCurrentTasks()
    .then(()=> taskService.renderDoneTasks())
    .then(()=> taskService.createAddTaskEvent());