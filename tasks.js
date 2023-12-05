function displayTasksToCards() {
  const currentUser = getCurrentUser();

  let assignedTasksCard = document.getElementById("assignedTasks");
  let inProgressTasksCard = document.getElementById("inProgressTasks");
  let completeTasksCard = document.getElementById("completedTasks");

  function filterTasks(statusOfTasks) {
    return dummyTasks.filter(
      (task) => task.assignedTo === currentUser && task.status === statusOfTasks
    );
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
            <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Move to
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" data-status="assigned">Assigned</a></li>
        <li><a class="dropdown-item" href="#" data-status="in-progress">In Progress</a></li>
        <li><a class="dropdown-item" href="#" data-status="complete">Complete</a></li>
    </ul>
</div>  
          </div>
        </div>
      `;
    }
    return taskString; // Return the concatenated taskString
  }

  let assignedTasksForCurrentUser = filterTasks("assigned");
  let inProgressTasksForCurrentUser = filterTasks("in-progress");
  let completeTasksForCurrentUser = filterTasks("complete");

  assignedTasksCard.innerHTML = getTaskTemplate(
    assignedTasksForCurrentUser
  );
  inProgressTasksCard.innerHTML = getTaskTemplate(
    inProgressTasksForCurrentUser
  );
  completeTasksCard.innerHTML = getTaskTemplate(
    completeTasksForCurrentUser
  );
}

displayTasksToCards();
