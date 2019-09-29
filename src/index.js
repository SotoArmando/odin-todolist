
import { diststorage } from './js/storage';
import { getFocused } from './js/views';
import { buildLayout, render  } from './js/dom';

const datastorage = diststorage().getStorage([]);

console.log([...datastorage])

buildLayout();
render(datastorage);

const addTask = () => {
    let form = document.querySelector("#task-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})
    console.log(datastorage[getFocused()])
    datastorage[getFocused()].tasks.push(data);
    render(datastorage);
}

const addTodo = () => {
    let form = document.querySelector("#todo-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    data["tasks"] = [];
    datastorage.push(data);
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



document.querySelector("box-todo > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    addTodo();
});
document.querySelector("box-todo > button:last-of-type").addEventListener("click", () => {
    //close window
});

document.querySelector("box > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    addTask();
});
document.querySelector("box > button:last-of-type").addEventListener("click", () => {
    //close window
});

