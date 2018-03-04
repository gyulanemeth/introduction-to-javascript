const todoContainer = document.getElementById("todo-container");

const todos = [];

function addTodo(todo) {
    todo = todo || {};

    if (typeof todo.label !== "string") {
        throw new Error("todo.label has to be a string");
    }

    if (typeof todo.done !== "boolean") {
        throw new Error("todo.done has to be a boolean");
    }

    todos.push(todo);

    const todoElem = document.createElement("div");
    const todoText = document.createTextNode(todo.label);

    if (todo.done) {
        todoElem.style.textDecoration = "line-through";
    }

    todoElem.appendChild(todoText);

    todoElem.addEventListener("click", function() {
        todo.done = !todo.done;

        if (todo.done) {
            todoElem.style.textDecoration = "line-through";
        } else {
            todoElem.style.textDecoration = "";
        }

        save();
    });

    todoContainer.appendChild(todoElem);

    save();
}

function save() {
    const json = JSON.stringify(todos);
    localStorage.setItem("todo-state", json);
}

document.getElementById("add-button").addEventListener("click", function() {
    const newTodo = document.getElementById("todo-input").value.trim();

    if (!newTodo) {
        return;
    }
    
    addTodo({
        label: newTodo,
        done: false
    });
});

const savedJson = localStorage.getItem("todo-state");

if (savedJson) {
    const lastState = JSON.parse(savedJson);

    for(let idx = 0; idx < lastState.length; idx += 1) {
        addTodo(lastState[idx]);
    }
}

