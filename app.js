//Define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners

loadEventListeners();

function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove task event
  taskList.addEventListener("click", removeTask)
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  const input = taskInput.value;
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
  //clear input
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }

}