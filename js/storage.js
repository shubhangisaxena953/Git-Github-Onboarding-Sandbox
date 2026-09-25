// Load the saved tasks, or return an empty list when none exist.
function loadTasks() {
  var savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Save the current tasks in the browser.
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}