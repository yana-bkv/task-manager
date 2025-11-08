// import LocalStorageRepository from './repositories/localStorageRepository.js';
import TaskService from './service/TaskService.js';
import MongoDBTaskRepository from "./repositories/MongoDBTaskRepository.js";
import "bootstrap/dist/css/bootstrap.min.css";

const currentTasksContainer = document.getElementById('currentTasksContainer');
const taskInput  = document.getElementById('taskInput') as HTMLInputElement;
const taskAddBtn = document.getElementById('taskAddBtn');
const doneTasksContainer = document.getElementById('doneTasksContainer');

// const localStorageTaskRepository = new LocalStorageRepository();
const mongodbTaskRep = new MongoDBTaskRepository();

const taskService = new TaskService(currentTasksContainer, mongodbTaskRep, taskInput, taskAddBtn, doneTasksContainer);

taskService.renderCurrentTasks();
taskService.renderDoneTasks();
taskService.createAddTaskEvent();

console.log('Fetching...');
fetch('http://localhost:4000/api/tasks')
    .then(res => {
        console.log('Response received:', res);
        return res.json();
    })
    .then(data => console.log('Data:', data))
    .catch(err => console.error('Error:', err));