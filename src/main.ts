import {LocalStorageRepository} from './repositories/localStorageRepository.js';

const taskManagement = new LocalStorageRepository();

taskManagement.delete(3);

console.log(taskManagement.findAll());