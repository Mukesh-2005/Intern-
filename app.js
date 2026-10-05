let tasks = [
  { text: "Learn DOM", done: false },
  { text: "Practice loops", done: false }
];

let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");

function renderTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i].text + " ";

    if (tasks[i].done===true)
      li.textContent  += "(Completed)";
    

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", function() {
      tasks[i].done = !tasks[i].done;
      renderTasks();
    });
    li.appendChild(doneBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      tasks.splice(i, 1);
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

addBtn.addEventListener("click", function() {
  if (taskInput.value !== "") {
    tasks.push({ text: taskInput.value, done: false });
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();