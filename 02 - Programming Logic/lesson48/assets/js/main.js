function toDoListScope() {
  const taskInput = document.querySelector('.task-input');
  const createTaskButton = document.querySelector('.create-task-button');
  const taskList = document.querySelector('.task-list');

  function createDeleteTaskButton(listItem) {
    listItem.innerText += ' ';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-button');
    deleteButton.setAttribute('title', 'Delete this task');
    deleteButton.innerText = 'Delete';

    listItem.appendChild(deleteButton);
  }

  function createTaskListItem() {
    const listItem = document.createElement('li');
    listItem.classList.add('task');

    return listItem;
  }

  function storeTasks() {
    const listItems = taskList.querySelectorAll('.task');
    const tasks = [];

    for (const listItem of listItems) {
      let taskText = listItem.innerText;
      taskText = taskText.replace('\nDelete', '').slice(2).trim();

      tasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  function createTask(task) {
    const listItem = createTaskListItem();
    listItem.innerHTML = `&bull; ${task}`;

    createDeleteTaskButton(listItem);
    taskList.appendChild(listItem);

    storeTasks();
  }

  function deleteTask(taskListItem) {
    taskListItem.parentElement.remove();
    storeTasks();
  }

  function clearInput() {
    taskInput.value = '';
    taskInput.focus();
  }

  function handleCreateTask() {
    const newTask = taskInput.value;

    if (!newTask) {
      return;
    }

    createTask(newTask);
    clearInput();
  }

  function renderTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    const tasks = JSON.parse(tasksJSON);

    for (const task of tasks) {
      createTask(task);
    }
  }

  createTaskButton.addEventListener('click', () => {
    handleCreateTask();
  });

  taskInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      handleCreateTask();
    }
  });

  document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('delete-task-button')) {
      deleteTask(element);
    }
  });

  renderTasks();
}

toDoListScope();
