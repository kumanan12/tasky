function getTasksFromStorage() {
  const taskAsString = localStorage.getItem("tasks");
  let tasks = JSON.parse(taskAsString);
  if (!tasks) {
    return [];
  }
  return tasks;
}

function saveTasksToStorage(tasks) {
  let tasksAsString = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksAsString);
}

function getCurrentUser() {
  let name = localStorage.getItem("currentUser");
  return name;
}

function displayUserWithLabel(name) {
  let label = "";
  if (name == "Krrithik") {
    label = `Logged in as ${name}.<br> Role: Admin`;
  } else {
    label = `Logged in as ${name}.<br> Role: Standard User`;
  }
  document.getElementById("currentUser").innerHTML = label;
}