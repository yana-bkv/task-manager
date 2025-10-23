import {LocalStorageRepository} from './repositories/localStorageRepository.js';

const taskManagement = new LocalStorageRepository();

const addBtn = document.getElementById('addButton');
const input = document.getElementById('taskTitle') as HTMLInputElement;

// CREATE
addBtn?.addEventListener('click', function(e) {
    e.preventDefault();
    const taskTitle :string  = input.value;
    console.log(input, taskTitle);
    taskManagement.create({id: 2, title: taskTitle});
    input.value = '';
})

// SHOW ALL
const tasksListDiv = document.getElementById('tasksList');
const tasksStorage = taskManagement.findAll();


tasksStorage.forEach(task=>{
    const taskElement = document.createElement('div');
    taskElement.classList.add('container-md');
    taskElement.classList.add('mb-3');
    taskElement.classList.add('task');

    taskElement.textContent = task.title;
    tasksListDiv?.append(taskElement)
})

// UPDATE


// DELETE
// taskManagement.delete(2);
