document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const newTask = document.createElement('li');

        //  Correct way to add text 
        const taskTextNode = document.createTextNode(taskText);
        newTask.appendChild(taskTextNode);

        //  Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Exact case!
        removeButton.className = 'remove-btn';

        //  Onclick removes the <li> from taskList
        removeButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        //  Append button to li, then li to list
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        //  Clear input
        taskInput.value = '';
    }

    //  Click handler
    addButton.addEventListener('click', addTask);

    //  Enter key handler
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        taskInput.value = task;
        addTask();
    });
});
