
import { diststorage } from './js/storage';
import { getFocused } from './js/views';
import { buildLayout, render  } from './js/dom';

const datastorage = diststorage();

buildLayout();
render(datastorage.getStorage([]));



document.querySelector("box-todo > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    datastorage.addTodo(document.querySelector("nav select").value);
});

document.querySelector("box-todo > button:last-of-type").addEventListener("click", () => {
    //close window
});

document.querySelector("box > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    datastorage.addTask(document.querySelector("nav select").value);
});
document.querySelector("box > button:last-of-type").addEventListener("click", () => {
    //close window
});

