
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    // Load tasks from localStorage on page load
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                addTaskToDOM(taskText);
            });
        }
    }

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to DOM (without updating localStorage directly)
    function addTaskToDOM(taskText) {
        const newTask = document.createElement('li');

        const textNode = document.createTextNode(taskText);
        newTask.appendChild(textNode);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            taskList.removeChild(newTask);
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
    }

    // Add task and update localStorage
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        addTaskToDOM(taskText);
        tasks.push(taskText);
        saveTasks();

        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks(); // Load tasks on initial page load
});
