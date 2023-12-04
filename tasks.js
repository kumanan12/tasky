function displayTasksToCards() {
  let assignedTasksCard = document.getElementById("assignedTasks");
  let inProgressTasksCard = document.getElementById("inProgressTasks");
  let completeTasksCard = document.getElementById("completedTasks")

  const currentUser = getCurrentUser();
  let assignedTasksForCurrentUser = dummyTasks.filter((task) => {
    return task.assignedTo === currentUser && task.status === "assigned";
  });

  let inProgressTasksForCurrentUser = dummyTasks.filter((task) => {
    return task.assignedTo === currentUser && task.status === "in-progress";
  });

  let completeTasksForCurrentUser = dummyTasks.filter((task) => {
    return task.assignedTo === currentUser && task.status === "complete";
  });



  let assignedTasksString = "";
  for (const task of assignedTasksForCurrentUser) {
    assignedTasksString += `
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="card-title">${task.name}</h2>
        <div > Description : ${task.description}</div>
        <div> Assigned to : ${task.assignedTo}</div>
        <div> Status : ${task.status}</div>
        </div>
      </div>
      </div>
        `;
  }
  assignedTasksCard.innerHTML = assignedTasksString;

  let inProgressTasksString = "";
  for (const task of inProgressTasksForCurrentUser) {
    inProgressTasksString += `
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="card-title">${task.name}</h2>
        <div > Description : ${task.description}</div>
        <div> Assigned to : ${task.assignedTo}</div>
        <div> Status : ${task.status}</div>
        </div>
      </div>
      </div>
        `;
  }
  inProgressTasksCard.innerHTML = inProgressTasksString;


  let completeTasksString = "";
  for (const task of completeTasksForCurrentUser) {
    completeTasksString += `
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="card-title">${task.name}</h2>
        <div > Description : ${task.description}</div>
        <div> Assigned to : ${task.assignedTo}</div>
        <div> Status : ${task.status}</div>
        </div>
      </div>
      </div>
        `;
  }
  completeTasksCard.innerHTML = completeTasksString;

  // get the assignd tasks card.
  // loop through the dummyTasks array and create a card for each task
  // assign the card to the assigned tasks card
}

displayTasksToCards();
