document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new li and set text
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Capital R
        removeButton.className = 'remove-btn';

        // Set up remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Append button to li, then li to task list
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        // Clear input
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
