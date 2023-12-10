//show add task only to admin
function displayAddTaskButton() {
  const currentUser = getCurrentUser();
  const addTaskBtn = document.getElementById("addTaskBtn");
  let disableTaskName = document.getElementById("taskName")
  if (currentUser === "Krrithik") {
    addTaskBtn.style.display = "";
    disableTaskName.disabled = false;
    return;
  }
  addTaskBtn.style.display = "none";
  disableTaskName.disabled = true;
}
function changeUser() {
  let name = document.getElementById("user").value;
  localStorage.setItem("currentUser", name);
  document.getElementById("currentUser").innerHTML = name;
  displayUserWithLabel(name);
  displayAddTaskButton();
  displayTasksToCards();
}

function displayUser() {
  let name = getCurrentUser();
  let userDropDown = document.getElementById("user");
  userDropDown.value = name;
  displayTaskTable(name);
  displayUserWithLabel(name);
}

function displayUserWithLabel(name) {
  let label = "";
  if (name == "Krrithik") {
    label = `Logged in as ${name}. Role: Admin`;
  } else {
    label = `Logged in as ${name}. Role: Standard User`;
  }
  document.getElementById("currentUser").innerHTML = label;
}

function getCurrentUser() {
  let name = localStorage.getItem("currentUser");
  return name;
}

function addTask(){
  var myModal = new bootstrap.Modal(
    document.getElementById("newTaskModal"),
    {}
  );
  myModal.show();
}


function addEditTaskListener() {
  let tasks = getTasksFromStorage();
  let editTaskButtons = document.querySelectorAll(".editTask");
  for (const button of editTaskButtons) {
    button.addEventListener("click", function () {
      let taskId = button.getAttribute("data-id");
      console.log(taskId);
      let task = tasks.find((task) => task.id === taskId);
      document.getElementById("taskName").value = task.name;
      document.getElementById("taskDescription").value = task.description;
      document.getElementById("taskAssignedTo").value = task.assignedTo;
      document.getElementById("taskStatus").value = task.status;
      document.getElementById("taskId").value = task.id;
      var myModal = new bootstrap.Modal(
        document.getElementById("editTaskModal"),
        {}
      );
      myModal.show();
    });
  }
}

function getTaskTemplate(tasks) {
  let taskString = "";
  for (const task of tasks) {
    taskString += `
        <div class="card mb-3">   
          <div class="card-body">
          <div class="d-flex">
          <h2 class="card-title p-2 w-100">${task.name}
          </h2>
          <button type="button" class="btn btn-outline-danger btn-md  flex-shrink-1 task-close-button">x</button>
          </div>
            <div> Description: ${task.description}</div>
            <div> Assigned to: ${task.assignedTo}</div>
            <div class="mb-3"> Status: ${task.status}</div>
           <button type="button" class="btn btn-outline-success btn-md editTask" data-id="${task.id}">Edit</button>
           <button type="button" class="btn btn-outline-danger btn-md Remove">Remove</button>
          </div>
        </div>
      `;
  }
  return taskString; // Return the concatenated taskString
}

function filterTasks(statusOfTasks) {
  let tasks = getTasksFromStorage();
  const currentUser = getCurrentUser();
  return tasks.filter(
    (task) => task.assignedTo === currentUser && task.status === statusOfTasks
  );
}

function displayTasksToCards() {
  let assignedTasksCard = document.getElementById("assignedTasks");
  let inProgressTasksCard = document.getElementById("inProgressTasks");
  let completeTasksCard = document.getElementById("completedTasks");

  let assignedTasksForCurrentUser = filterTasks("assigned");
  let inProgressTasksForCurrentUser = filterTasks("in-progress");
  let completeTasksForCurrentUser = filterTasks("complete");

  assignedTasksCard.innerHTML = getTaskTemplate(assignedTasksForCurrentUser);
  inProgressTasksCard.innerHTML = getTaskTemplate(
    inProgressTasksForCurrentUser
  );
  completeTasksCard.innerHTML = getTaskTemplate(completeTasksForCurrentUser);
  addEditTaskListener();
}

function addNewTask(){
  let tasks = getTasksFromStorage();
  let taskName = document.getElementById("newTaskName").value;
  let taskDescription = document.getElementById("newTaskDescription").value;
  let taskAssignedTo = document.getElementById("newTaskAssignedTo").value;
  let taskStatus = document.getElementById("newTaskStatus").value;
  let taskId = crypto.randomUUID();
  let newTask = {
    name: taskName,
    description: taskDescription,
    status: taskStatus,
    assignedTo: taskAssignedTo,
    id: taskId,
  };
  tasks.push(newTask);
  saveTasksToStorage(tasks);

}

function saveTask() {
  let tasks = getTasksFromStorage();
  let taskName = document.getElementById("taskName").value;
  let taskDescription = document.getElementById("taskDescription").value;
  let taskAssignedTo = document.getElementById("taskAssignedTo").value;
  let taskStatus = document.getElementById("taskStatus").value;
  let taskId = document.getElementById("taskId").value;

  let editedTask = {
    name: taskName,
    description: taskDescription,
    status: taskStatus,
    assignedTo: taskAssignedTo,
    id: taskId,
  };

  let taskIndex = tasks.findIndex((x) => x.id === taskId);
  tasks[taskIndex] = editedTask;
  saveTasksToStorage(tasks);
  displayTasksToCards();
}
displayUser();
displayTasksToCards();
