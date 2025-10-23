import {LocalStorageRepository} from './repositories/localStorageRepository.js';

const taskManagement = new LocalStorageRepository();

taskManagement.create(
    {
        id: 1,
        title: "Task 1",
        description: "",
        status: false,
        created_at: new Date
    }
)
taskManagement.create(
    {
        id: 1,
        title: "Task 1",
        description: "",
        status: false,
        created_at: new Date
    }
)


taskManagement.create(
    {
        id: 3,
        title: "Task 3",
        description: "",
        status: false,
        created_at: new Date
    }
)