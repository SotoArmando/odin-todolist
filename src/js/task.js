import { renderTask, renderTodo } from './dom';

const Todo = (id, { title, tasks, description, isDone = false, isPriority = false, date }) => {

  const proto = {
    title: title || 'No title',
    description: description || 'No Description',
    isDone,
    isPriority,
    date,
    tasks: (tasks) ? tasks.map((task, index) => Task(`${id}-${index}`, task)) : [],
    id,
    type: 'Todo',
  }

  const getTaskId = () => proto.tasks.length
  const toggleDone = () => { proto.isDone = !proto.isDone; }
  const togglePriority = () => { proto.isPriority = !proto.isPriority; }
  const addTask = (task) => { proto.tasks.push(task); }
  const maptoHTML = () => renderTodo(proto)

  return { toggleDone, togglePriority, addTask, getTaskId, maptoHTML };
};

const Task = (id = new Date().toISOString(), { title = 'no title', description = 'no description', isDone = false }) => {
  const proto = {
    title,
    description,
    isDone,
    id,
    type: 'Task',
  }
  const toggleDone = () => { proto.isDone = !proto.isDone; }
  const maptoHTML = () => renderTask(proto);
  return { toggleDone, maptoHTML }
}


export { Todo, Task };



