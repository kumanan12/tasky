function displayTasksToCards() {
  const currentUser = getCurrentUser();

  let assignedTasksCard = document.getElementById("assignedTasks");
  let inProgressTasksCard = document.getElementById("inProgressTasks");
  let completeTasksCard = document.getElementById("completedTasks");

  function filterTasks(statusOfTasks) {
    return dummyTasks.filter((task) => task.assignedTo === currentUser && task.status === statusOfTasks);
  }

  function tasksStringTemplate(tasks) {
    let taskString = '';
    for (const task of tasks) {
      taskString += `
        <div class="card mb-3">   
          <div class="card-body">
            <h2 class="card-title">${task.name}</h2>
            <div> Description: ${task.description}</div>
            <div> Assigned to: ${task.assignedTo}</div>
            <div> Status: ${task.status}</div>
          </div>
        </div>
      `;
    }
    return taskString; // Return the concatenated taskString
  }

  let assignedTasksForCurrentUser = filterTasks('assigned');
  let inProgressTasksForCurrentUser = filterTasks('in-progress');
  let completeTasksForCurrentUser = filterTasks('complete');

  assignedTasksCard.innerHTML = tasksStringTemplate(assignedTasksForCurrentUser);
  inProgressTasksCard.innerHTML = tasksStringTemplate(inProgressTasksForCurrentUser);
  completeTasksCard.innerHTML = tasksStringTemplate(completeTasksForCurrentUser);
}

displayTasksToCards();
