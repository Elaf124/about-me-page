let tasks = [];

// Add Task
function addTask() {
  let task = prompt("Enter new task:");

  if (task === "" || task === null) {
    console.log("Task cannot be empty!");
    return;
  }

  tasks.push(task);
  console.log("Task added successfully!");
}

// Delete Task
function deleteTask() {
  let index = parseInt(prompt("Enter index to delete:"));

  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log("Invalid index!");
    return;
  }

  tasks.splice(index, 1);
  console.log("Task deleted successfully!");
}

// List Tasks
function listTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  console.log("------ TASK LIST ------");

  for (let i = 0; i < tasks.length; i++) {
    console.log(i + " : " + tasks[i]);
  }

  console.log("-----------------------");
}

// 🔥 MAIN MENU LOOP
while (true) {
  let choice = prompt(
    "Choose:\n1. Add Task\n2. Delete Task\n3. List Tasks\n4. Exit"
  );

  if (choice === "1") {
    addTask();
  } 
  else if (choice === "2") {
    deleteTask();
  } 
  else if (choice === "3") {
    listTasks();
  } 
  else if (choice === "4") {
    console.log("Program ended.");
    break;
  } 
  else {
    console.log("Invalid choice!");
  }
}
