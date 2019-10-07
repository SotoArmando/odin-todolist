import { render } from './dom';
import { getFocused } from './views';
import { Project } from './task';

function storageAvailable(type = 'localStorage') {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && (storage && storage.length !== 0)
    );
  }
}


const diststorage = () => {

  const removeTodo = (id, project) => {
    let nextState = getStorage([], project);

    nextState.splice(id - 1, 1);

    setStorage(nextState, project);
  }
  const updateTodo = (id, Todo, project) => {
    let nextState = getStorage([], project);

    nextState[id] = Todo;

    setStorage(nextState, project);
  }
  const removeTask = (id, project) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([], project);
    nextState[todoId].tasks.splice(taskId - 1, 1);
    setStorage(nextState, project);
  }

  const updateTask = (id, Task, project) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([], project);
    nextState[todoId].tasks[taskId] = Task;
    setStorage(nextState, project);
  }

  const addTask = (project) => {
    let form = document.querySelector("#task-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})
    let datastorage = [...getStorage([], project)];
    datastorage[getFocused()].tasks.push(data);
    render(datastorage, project);
  }

  const addTodo = (project) => {
    let form = document.querySelector("#todo-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    data["tasks"] = [];
    let datastorage = [...getStorage([], project)];

    datastorage.push(data);
    render(datastorage, project);
  }

  const switchProject = (project) => {
    let theproject = project || "Todos";

    let datastorage = [...getStorage([], theproject)];


    render(datastorage);
  }
  const newProject = () => {
    debugger;
    let form = document.querySelector("#newproject-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    let projects = [data.title, ...[...document.querySelector("select").childNodes].map((value) => value.innerText)]
    projects = projects.map((value) => { return { title: value } });

    let select = document.querySelector("select");
    let newoption = document.createElement("option");
    newoption.setAttribute("value", data.title)
    newoption.innerText = data.title;
    select.appendChild(newoption)

    setStorage(projects, "Projects");

    document.querySelector("select").selectedIndex = document.querySelector("select").childNodes.length - 1;
    switchProject(document.querySelector("nav select").value);
  }

  const loadProjects = () => {
    debugger;
    let projects = getStorage([], "Projects")
    let select = document.querySelector("select");

    debugger;

    if (projects.length < 1) {
      projects.push({ title: "Default Project" })
    }

    projects.forEach(element => {

      let option = document.createElement("option");
      option.innerText = element.title;
      select.appendChild(option);
    });

  }

  const setStorage = (data, project) => localStorage.setItem(project || "Default Project", JSON.stringify(data));
  const getStorage = (data, project) => {
    let newData = data;
    if (newData.length) {
      setStorage(newData);
    } else if (localStorage.getItem(project || 'Default Project')) {
      debugger;
      try {
        newData = JSON.parse(localStorage.getItem(project || 'Default Project'));

      } catch { newData = [] }

      newData = newData.hasOwnProperty('length') ? newData : [newData]
    }
    return newData;
  };

  return { getStorage, setStorage, removeTask, updateTask, removeTodo, addTask, addTodo, updateTodo, switchProject, newProject, loadProjects };
};


export { diststorage };
