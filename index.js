
function displayTaskTable(userName) {
  const tasks = getTasksFromStorage();

  const taskList = document.getElementById("taskList");
  if (!taskList) {
    return;
  }
  let taskListString = "";
  let tasksByUser = null;
  if (getCurrentUser() === "Krrithik") {
    tasksByUser = tasks;
  } else {
    tasksByUser = tasks.filter((task) => {
      return task.assignedTo === userName;
    });
  }

  for (const task of tasksByUser) {
    taskListString += `
          <tr class="table-primary">
              <td>${task.name}</td>
              <td>${task.description}</td>
              <td>${task.status}</td>
              <td>${task.assignedTo}</td>
          </tr>
      `;
  }
  taskList.innerHTML = taskListString;
}

function changeUser() {
  let name = document.getElementById("user").value;
  localStorage.setItem("currentUser", name);
  document.getElementById("currentUser").innerHTML = name;
  displayTaskTable(name);
  displayUserWithLabel(name);
}