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
