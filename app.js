//Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners

loadEventListeners();

function loadEventListeners() {
  //dom load event
  document.addEventListener("DOMContentLoaded", getTasks);
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove task event
  taskList.addEventListener("click", removeTask);
  //clear task  
  clearBtn.addEventListener("click", clearTasks);
  //FilterTasks
  filter.addEventListener("keyup", filterTasks)

}

//get task from storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    //create LI element
    const li = document.createElement("li");
    li.className = "collection-item";
    //create text node and append to li
    // li.appendChild(document.createTextNode(taskInput.value));
    li.textContent = task;
    //Create new links el
    const link = document.createElement("a");
    //add Class
    link.className = "delete-item secondary-content";
    //Add Icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);
    //append li to UL
    taskList.appendChild(li);
  })
}

function addTask(e) {
  const input = taskInput.value.trim();
  if (input === "") {
    alert("Add a task");
  }
  taskInput.value = "";
  //create LI element
  const li = document.createElement("li");
  li.className = "collection-item";
  //create text node and append to li
  // li.appendChild(document.createTextNode(taskInput.value));
  li.textContent = input;
  //Create new links el
  const link = document.createElement("a");
  //add Class
  link.className = "delete-item secondary-content";
  //Add Icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append link to li
  li.appendChild(link);
  //append li to UL
  taskList.appendChild(li);
  //store in local storage
  storeTaskInLocal(input);
  //clear input
  e.preventDefault();
}

//store task func
function storeTaskInLocal(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(e) {
  let aTag = e.target.parentElement;
  let iTag = aTag.parentElement;
  if (aTag.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      iTag.remove();
      //remove from storage
      removeTaskFromStorage(iTag)
    }
  }
}

function removeTaskFromStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks() {
  // taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }

  });

}
