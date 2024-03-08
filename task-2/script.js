// Get form elements and task list
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Function to add a new task
const addTask = () => {
  const taskName = document.getElementById('taskName').value;
  const deadline = document.getElementById('deadline').value;
  const priority = document.getElementById('priority').value;
  const label = document.getElementById('label').value;

  if (taskName && deadline && priority) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskName}</span>
      <span>${deadline}</span>
      <span class="${priority}-priority">${priority}</span>
      <span>${label}</span>
    `;

    taskList.appendChild( taskItem);
    clearForm();
  } else {
    alert('Please fill in all required fields.');
  }
};

// Function to clear the form after adding a task
const clearForm = () => {
  taskForm.reset();
};

// Event listener for the Add Task button
document.querySelector('button').addEventListener('click', addTask);
