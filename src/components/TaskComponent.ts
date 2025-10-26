export default function TaskComponent(title: string, deleteTask: () => void) :HTMLDivElement {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteTask();
    })

    const span = document.createElement('span');
    span.textContent = title;

    const alertDiv = document.createElement('div');
    alertDiv.classList.add('container-md');
    alertDiv.classList.add('mb-3');
    alertDiv.classList.add('task');

    alertDiv.append(span);
    alertDiv.append(deleteBtn);

    return alertDiv
}