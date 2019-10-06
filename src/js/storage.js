import { render } from './dom';
import { getFocused } from './views';


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

  const removeTodo = (id,project) => {
    let nextState = getStorage([],project);
    console.log(nextState)
    nextState.splice(id - 1, 1);
    console.log(id)
    setStorage(nextState,project);
  }
  const updateTodo = (id,Todo,project) => {
    let nextState = getStorage([],project);
    console.log(nextState)
    nextState[id] = Todo;
    console.log(id)
    setStorage(nextState,project);
  }
  const removeTask = (id,project) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([],project);
    nextState[todoId].tasks.splice(taskId - 1, 1);
    setStorage(nextState,project);
  }

  const updateTask = (id, Task,project) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([],project);
    nextState[todoId].tasks[taskId] = Task;
    setStorage(nextState,project);
  }

  const addTask = (project) => {
    let form = document.querySelector("#task-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})
    let datastorage = [...getStorage([],project)];
    datastorage[getFocused()].tasks.push(data);
    render(datastorage,project);
  }

  const addTodo = (project) => {
    let form = document.querySelector("#todo-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    data["tasks"] = [];
    let datastorage = [...getStorage([],project)];
    console.log(data);
    datastorage.push(data);
    render(datastorage,project);
  }

  const switchProject = (project) => {
    let theproject = project || "Todos"; 
    console.log(theproject)
    let datastorage = [...getStorage([],theproject)];
    console.log(datastorage)
    
    render(datastorage);
  }

  const setStorage = (data,project) => localStorage.setItem(project || "Todos", JSON.stringify(data));
  const getStorage = (data,project) => {
    let newData = data;
    if (newData.length) {
      setStorage(newData);
    } else if (localStorage.getItem(project || 'Todos')) {
      newData = JSON.parse(localStorage.getItem(project || 'Todos'));
      newData = newData.hasOwnProperty('length') ? newData : [newData]
    }
    return newData;
  };

  return { getStorage, setStorage, removeTask, updateTask, removeTodo, addTask, addTodo, updateTodo, switchProject };
};


export { diststorage };
