
import { diststorage } from './js/storage';
import { Task, Todo } from './js/task';
import { render, getFocused, setFocused } from './js/views';

const datastorage = diststorage().getStorage([]);

console.log([...datastorage])

const addTask = () => {
    debugger
    let Todo = datastorage[getFocused()];
    console.log("Todo " , datastorage, getFocused(), Todo)
    let form = document.querySelector("#task-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})
    let item = Task(Todo.getTaskId(), data);
    Todo.addTask(item);
    render(datastorage);
}

const addTodo = () => {
    let form = document.querySelector("#todo-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    let item = Todo(datastorage.length, data);
    datastorage.push(item);
    render(datastorage);
}

const removeTask = (Index, Todo) => {
    Todo.tasks.splice(Index, Index + 1);
    render(datastorage);
}

const removeTodo = (Index) => {
    datastorage.splice(Index, Index + 1);
    render(datastorage);
}

render(datastorage);

document.querySelector("box-todo > button:first-of-type").addEventListener("click", () => {
    addTodo();
});
document.querySelector("box-todo > button:last-of-type").addEventListener("click", () => {
    //close window
});

document.querySelector("box > button:first-of-type").addEventListener("click", () => {
    addTask();
});
document.querySelector("box > button:last-of-type").addEventListener("click", () => {
    //close window
});

