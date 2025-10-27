interface TaskComponentArgs {
    title: string
    deleteTask: () => void
    updateTask: (newTitle: string) => void
    status: boolean
    updateStatus: () => void;
}

export default function TaskComponent({title, deleteTask, updateTask, status, updateStatus}: TaskComponentArgs) :HTMLDivElement {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteTask();
    })

    const updateBtn = document.createElement('button');
    updateBtn.className = 'btn btn-success hidden';
    updateBtn.type = 'button';
    updateBtn.textContent = 'Update'
    updateBtn.addEventListener('click', () => {
        updateTask(input.value);
    })

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-success';
    doneBtn.type = 'button';
    doneBtn.textContent = 'Make done'
    doneBtn.addEventListener('click', () => {
        updateStatus();
    })

    const makeTaskBackBtn = document.createElement('button');
    makeTaskBackBtn.className = 'btn btn-warning';
    makeTaskBackBtn.type = 'button';
    makeTaskBackBtn.textContent = 'Return back'
    makeTaskBackBtn.addEventListener('click', () => {
        updateStatus();
    })


    const input = document.createElement('input') as HTMLInputElement;
    input.className = 'taskTitle';
    input.value = title;
    input.addEventListener('focus', () => {
        updateBtn.classList.remove('hidden');
        deleteBtn.classList.add('hidden');
    });
    input.addEventListener('focusout', () => {
        setTimeout(()=> {
            updateBtn.classList.add('hidden');
            deleteBtn.classList.remove('hidden');
        }, 100)
    });

    if (status) {
        doneBtn.classList.add('hidden');
        makeTaskBackBtn.classList.remove('hidden');
    } else {
        doneBtn.classList.remove('hidden');
        makeTaskBackBtn.classList.add('hidden');
    }

    const alertDiv = document.createElement('div');
    alertDiv.className = `container-md mb-3 alert alert-${status ? 'success' : 'dark'} task-container`;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-button-container';

    buttonContainer.append(doneBtn, makeTaskBackBtn, updateBtn, deleteBtn);
    alertDiv.append(input, buttonContainer);

    return alertDiv
}