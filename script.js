function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem  = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;
        /* desarrollar que se marque como terminada */ 

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {deleteTask(this)};
        /* desarrollar que se elimine */ 

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        document.getElementById("taskList").appendChild(listItem);

        taskInput.value = "";
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

const taskInput = document.getElementById("task");

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
})