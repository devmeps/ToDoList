// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;
  
  // Validar que la tarea no esté vacía y tenga al menos 5 letras
  if (taskText.trim() === '') {
    alert('El campo no puede estar vacío. Por favor, ingresa una tarea.');
    return;
  } else if (taskText.trim().length < 5) {
    alert('La tarea debe tener al menos 5 letras.');
    return;
  }
  
  // Validar que la tarea no exista previamente en el array
  if (tasks.includes(taskText)) {
    alert('La tarea ya existe. Por favor, ingresa una tarea diferente.');
    return;
  }
  
  tasks.push(taskText);
  taskInput.value = ''; // Limpiar el input
  displayTasks();
}

// Función para mostrar las tareas
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Limpiar la lista antes de mostrar las tareas

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task} 
      <button class="delete-btn rounded-md mx-2 mt-5 bg-red-500 hover-bg-red-700 text-white p-2" onclick="deleteTask(${index})">Eliminar</button>
    `;
    taskList.appendChild(li);
  });
}

// Función para eliminar una tarea
function deleteTask(index) {
    const taskText = tasks[index];
    const confirmed = confirm('¿Estás seguro de que deseas eliminar la tarea: "' + taskText + '"?');
  
    if (confirmed) {
      tasks.splice(index, 1);
      displayTasks();
    }
  }
  
  // ... (resto del código)
  
// Función para borrar todas las tareas
function clearAllTasks() {
    const confirmed = confirm('¿Estás seguro de que deseas borrar todas las tareas?');
  
    if (confirmed) {
      tasks = [];  // Borrar todas las tareas
      displayTasks();
    }
  }

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  };
