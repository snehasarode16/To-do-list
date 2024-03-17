/*function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    var button = document.createElement("button");
    button.textContent = "Remove";
    button.className = "remove";
    button.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };

    li.appendChild(button);
    ul.appendChild(li);

    input.value = "";
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
    }
}, false);
*/


function updateTaskCount() {
    var totalTasks = document.querySelectorAll('li').length;
    var completedTasks = document.querySelectorAll('li.completed').length;
    var remainingTasks = totalTasks - completedTasks;
    document.getElementById('remainingCount').textContent = remainingTasks;
    document.getElementById('completedCount').textContent = completedTasks;
}

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    var button = document.createElement("button");
    button.textContent = "Remove";
    button.className = "remove";
    button.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        updateTaskCount();
    };

    li.appendChild(button);
    ul.appendChild(li);

    input.value = "";

    updateTaskCount();
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
        updateTaskCount();
    }
}, false);
