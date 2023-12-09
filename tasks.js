function addEditTaskListener() {
  let editTaskButtons = document.querySelectorAll(".editTask");
  for (const button of editTaskButtons) {
    button.addEventListener("click", function () {
      let taskId = button.getAttribute("data-id")
      console.log(taskId);;
      let task = dummyTasks.find((task) => task.id === taskId);
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
            <div> Status: ${task.status}</div>
           <button type="button" class="btn btn-outline-success btn-md editTask" data-id="${task.id}">Edit</button>
          </div>
        </div>
      `;
  }
  return taskString; // Return the concatenated taskString
}

function filterTasks(statusOfTasks) {
  const currentUser = getCurrentUser();
    return dummyTasks.filter(
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

function saveTask() {


  displayTasksToCards();
}

displayTasksToCards();