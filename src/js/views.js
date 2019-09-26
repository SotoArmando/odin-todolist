import { Task, Todo } from './task';
import { diststorage } from './storage';

let FocusedTodo = 0;
const getFocused = () => FocusedTodo;
const setFocused = (Index) => FocusedTodo = Index;
const datastorage = diststorage();
const render = (data) => {
  debugger;
  datastorage.setStorage(data);

  let content = document.querySelector("#content");

  data = data.map((item,index) => Todo(index,item));

  var result = data.map(item => item.maptoHTML()).join("");
  result = "<start>" + result + `<button onclick='document.querySelector("ux-body > box-todo").classList.toggle("visible")'>Add Todo</button></start>`
  content.innerHTML = result;

  document.querySelectorAll("box-body > end > button[data-id]").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector('box > box-body > start[data-id="' + this.dataset.id + '"]').classList.toggle('active')
    });
  })

  document.querySelectorAll("box-foot > button[data-id]").forEach(button => {
    button.addEventListener("click", function () {
      setFocused(this.dataset.id);
      console.log("focused " + this.dataset.id)
    });
  })

  document.querySelectorAll("box-body > button[data-id]").forEach(button => {
    button.addEventListener("click", function () {
      setFocused(this.dataset.id);
      console.log("focused " + this.dataset.id)
    });
  })

  document.querySelectorAll("box-foot > box-task > end > button[data-id]").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector('box-task > start[data-id="' + this.dataset.id + '"]').classList.toggle('active')
    });
  })


}


export { render, getFocused, setFocused }