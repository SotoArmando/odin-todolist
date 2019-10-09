import db from './db';
import projectModel from './projectModel';

const taskModel = () => {
  const taskStore = db('task');
  const getTask = () => taskStore.getData();
  const deleteTask = (index) => taskStore.delData(index);

  const store = getTask() || [];

  const taskData = {
    title: 'no title',
    description: 'no description',
    isDone: false,
    priority: 0,
    dueDate: new Date(),
    project: 'Personal',
  };

  const setTask = (newTaskData = taskData, index = store.length) => {
    const newData = taskData;
    const { project } = newTaskData;
    projectModel.setProject(project);
    Object.assign(newData, newTaskData);
    return taskStore.setData(newData, index);
  };

  const toggleIsDone = (index) => {
    const newData = store[index];
    if (!newData) { return false; }

    newData.isDone = !newData.isDone;
    return taskStore.setData(newData, index);
  };

  const changePriority = (index, newPriorityLevel) => {
    const newData = store[index];
    if (!newData || newData.priority === newPriorityLevel) { return false; }

    newData.priority = newPriorityLevel;
    return taskStore.setData(newData, index);
  };

  return {
    store, setTask, deleteTask, toggleIsDone, changePriority,
  };
};

export default taskModel;
