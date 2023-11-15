document.addEventListener("loadall", function() {
    loadTodos();
});

function addTodo() {
    var titleInput = document.getElementById("title");
    var descriptionInput = document.getElementById("description");

    var title = titleInput.value;
    var description = descriptionInput.value;

    if (title && description) {
        var todo = {
            title: title,
            description: description
        };

        var todos = getTodos();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));

        titleInput.value = "";
        descriptionInput.value = "";

        loadTodos();
    } else {
        alert("Please enter both title and description.");
    }
}

function loadTodos() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    var todos = getTodos();

    todos.forEach(function(todo, index) {
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + todo.title + "</strong><br>" + todo.description + "<button onclick='removeTodo(" + index + ")'>Remove</button>";
        todoList.appendChild(li);
    });
}

function getTodos() {
    var todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

function removeTodo(index) {
    var todos = getTodos();
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}
