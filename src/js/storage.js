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

  const removeTodo = (id) => {
    let nextState = getStorage([]);
    console.log(nextState)
    nextState.splice(id - 1, 1);
    console.log(id)
    setStorage(nextState);
  }
  const updateTodo = (id,Todo) => {
    let nextState = getStorage([]);
    console.log(nextState)
    nextState[id] = Todo;
    console.log(id)
    setStorage(nextState);
  }
  const removeTask = (id) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([]);
    nextState[todoId].tasks.splice(taskId - 1, 1);
    setStorage(nextState);
  }

  const updateTask = (id, Task) => {
    const { 0: todoId, 1: taskId } = id.split("-");
    let nextState = getStorage([]);
    nextState[todoId].tasks[taskId] = Task;
    setStorage(nextState);
  }

  const addTask = () => {
    let form = document.querySelector("#task-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {})
    let datastorage = [...getStorage([])];
    datastorage[getFocused()].tasks.push(data);
    render(datastorage);
  }

  const addTodo = () => {
    let form = document.querySelector("#todo-form");
    let data = [...form.elements].reduce((map, input) => { (input.type == 'checkbox') ? map[input.name] = input.checked : map[input.name] = input.value; return map }, {});
    data["tasks"] = [];
    let datastorage = [...getStorage([])];
    console.log(data);
    datastorage.push(data);
    render(datastorage);
  }

  const setStorage = (data) => localStorage.setItem('Todos', JSON.stringify(data));
  const getStorage = (data) => {
    let newData = data;
    if (newData.length) {
      setStorage(newData);
    } else if (localStorage.getItem('Todos')) {
      newData = JSON.parse(localStorage.getItem('Todos'));
      newData = newData.hasOwnProperty('length') ? newData : [newData]
    }
    return newData;
  };

  return { getStorage, setStorage, removeTask, updateTask, removeTodo, addTask, addTodo, updateTodo };
};


export { diststorage };
