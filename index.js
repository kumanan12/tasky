let tasks = [];

let task = {
  assignedTo: "Krrithik",
  status: "unassigned",
  name: "Sample Task",
  description: "This is a sample task",
};
tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("name", "Krrithik");

function displayTasks(userName) {
  const taskList = document.getElementById("taskList");
  if (!taskList) {
    return;
  }
  let taskListString = "";
  let tasksByUser = null;
  if (getCurrentUser() === 'Krrithik')  {
    tasksByUser = dummyTasks;
  }else {
    tasksByUser = dummyTasks.filter((task) => {
      return task.assignedTo === userName;
  });
  }

  for (const task of tasksByUser) {
    taskListString += `
          <tr>
              <td>${task.name}</td>
              <td>${task.description}</td>
              <td>${task.status}</td>
              <td>${task.assignedTo}</td>
          </tr>
      `;
  }
  taskList.innerHTML = taskListString;
}
