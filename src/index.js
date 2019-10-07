
import { diststorage } from './js/storage';
import { getFocused } from './js/views';
import { buildLayout, render } from './js/dom';

const datastorage = diststorage();

buildLayout();
render(datastorage.getStorage([]));

datastorage.loadProjects();

document.querySelector("box-todo > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    datastorage.addTodo(document.querySelector("nav select").value);
});

document.querySelector("box-todo > button:last-of-type").addEventListener("click", () => {
    document.querySelector("ux-body > box-todo").classList.toggle("visible")
});

document.querySelector("ux-body box > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    datastorage.addTask(document.querySelector("nav select").value);
});

document.querySelector("ux-body box-newproject > button:first-of-type").addEventListener("click", () => {
    console.log("add todo :D.")
    datastorage.newProject();
});
document.querySelector("ux-body box > button:last-of-type").addEventListener("click", () => {
    document.querySelector("ux-body > box").classList.toggle("visible")
});

document.querySelector("nav > end > button:last-of-type").addEventListener("click", () => {
    document.querySelector("ux-body > box-newproject").classList.toggle("visible")
})

