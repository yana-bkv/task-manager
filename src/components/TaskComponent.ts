interface TaskComponentArgs {
    title: string
    deleteTask: () => void
    updateTask: (newTitle: string) => void
}

export default function TaskComponent({title, deleteTask, updateTask}: TaskComponentArgs) :HTMLDivElement {
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

    const alertDiv = document.createElement('div');
    alertDiv.className = 'container-md mb-3 task';

    alertDiv.append(input);
    alertDiv.append(updateBtn);
    alertDiv.append(deleteBtn);

    return alertDiv
}