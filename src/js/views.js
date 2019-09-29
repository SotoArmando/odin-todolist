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
  content.innerHTML = "";
  let wrapper = document.querySelector("wrapper");
  let wrapperstart = document.createElement("start");
  
  wrapper.appendChild(wrapperstart);

  data = data.map((item, index) => Todo(index, item));

  var result = data.map(item => item.maptoHTML());
  if (result.length > 0) {
    result.reduce((itemp, itemc, index, res) => wrapperstart.appendChild(itemc));
  }
  
  
  let addTodobutton = document.createElement("button");
  addTodobutton.innerText = "Add Todo"
  addTodobutton.onclick = () => {
    document.querySelector("ux-body > box-todo").classList.toggle("visible")
  }

  wrapperstart.appendChild(addTodobutton);
  
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

  document.querySelectorAll("box-task > end > button[data-id]").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector('box-task > start[data-id="' + this.dataset.id + '"]').classList.toggle('active')
    });
  })
}


export { render, getFocused, setFocused }