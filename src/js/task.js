import { renderTask, renderTodo } from './dom';

const Todo = (id, { title, tasks, description, IsDone, isPriority, date }) => {

  const proto = {
    title: title || 'No title',
    description: description || 'No Description',
    IsDone: IsDone || false,
    isPriority: isPriority || false,
    date,
    tasks: (tasks) ? tasks.map((task, index) => Task(`${id}-${index}`, task)) : [],
    id,
    type: 'Todo',
  }

  const getTaskId = () => proto.tasks.length
  const toggleDone = () => { proto.IsDone = !proto.IsDone; }
  const togglePriority = () => { proto.isPriority = !proto.isPriority; }
  const addTask = (task) => { proto.tasks.push(task); }
  const maptoHTML = () => renderTodo(proto)

  return { toggleDone, togglePriority, addTask, getTaskId, maptoHTML };
};

const Task = (id = new Date().toISOString(), { title = 'no title', description = 'no description', IsDone = false }) => {
  const proto = {
    title: title || 'No Title',
    description: description || 'No Description',
    IsDone,
    id,
    type: 'Task',
  }
  const toggleDone = () => { proto.IsDone = !proto.IsDone; }
  const maptoHTML = () => renderTask(proto);
  return { toggleDone, maptoHTML }
}

const Project = ({ title }) => {
  const proto = {
    title: title || 'No Title'
  }
  const maptoHTML = () => renderTask(proto);
}

export { Todo, Task, Project };



