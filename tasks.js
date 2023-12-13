function disableEditButtonForNonAdmins() {
  const currentUser = getCurrentUser();
  let disableTaskName = document.getElementById("taskName");
  let disableTaskAssignedTo = document.getElementById("taskAssignedTo");
  if (currentUser === "Krrithik") {
    addTaskBtn.style.display = "";
    disableTaskName.disabled = false;
    disableTaskAssignedTo.disabled = false;
    return;
  }
  disableTaskName.disabled = true;
  disableTaskAssignedTo.disabled = true;
}

//show add task only to admin
function displayAddTaskButton() {
  const currentUser = getCurrentUser();
  const addTaskBtn = document.getElementById("addTaskBtn");
  if (currentUser === "Krrithik") {
    addTaskBtn.style.display = "";
    return;
  }
  addTaskBtn.style.display = "none";
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





function addTask() {
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
  disableEditButtonForNonAdmins();
}

function removeTask(taskId) {
  let tasks = getTasksFromStorage();
  let filteredTasks = tasks.filter(task => {
    return task.id!==taskId;
  });
  saveTasksToStorage(filteredTasks);
  displayTasksToCards();
}

function getTaskTemplate(tasks) {
  let taskString = "";
  for (const task of tasks) {
    taskString += `
        <div class="card mb-3 js-cards">   
          <div class="card-body">
          <div class="d-flex">
          <h2 class="card-title p-2 w-100">${task.name}
          </h2>
          </div>
            <div><span class="js-cards-sub"> Description:</span> ${task.description}</div>
            <div><span class="js-cards-sub">  Assigned to:</span> ${task.assignedTo}</div>
            <div class="mb-3"> <span class="js-cards-sub"> Status:</span> ${task.status}</div>
           <button type="button" class="btn btn-outline-success btn-md editTask" data-id="${task.id}">Edit</button>
           <button onclick="removeTask('${task.id}')" type="button" class="btn btn-outline-danger btn-md Remove">Remove</button>
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

function addNewTask() {
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
  displayTasksToCards();
  resetModal();

}

function resetModal(){
  document.getElementById("newTaskName").value=''
  document.getElementById("newTaskDescription").value='';
  document.getElementById("newTaskAssignedTo").value ='';
  document.getElementById("newTaskStatus").value=''
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
displayAddTaskButton();