function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTable = document.getElementById('taskBody');

    if (taskInput.value.trim() !== '') {
        const newRow = taskTable.insertRow();

        const taskCell = newRow.insertCell(0);
        taskCell.innerText = taskInput.value;

        const actionsCell = newRow.insertCell(1);
        actionsCell.className = 'actions';

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.innerText = 'Edit';
        editButton.onclick = () => editTask(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTask(deleteButton);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        taskInput.value = '';
    }
}

function editTask(button) {
    const row = button.parentElement.parentElement;
    const taskCell = row.cells[0];
    const newTask = prompt('Edit Task:', taskCell.innerText);

    if (newTask !== null && newTask.trim() !== '') {
        taskCell.innerText = newTask;
    }
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}