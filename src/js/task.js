const TaskModel = () => {
  // Default values
  let newTitle = 'no title';
  let newDescription = 'no description';
  let newIsDone = false;
  let newPriority = 0;
  let newDueDate = new Date();

  const getTask = () => ({
    title: newTitle,
    description: newDescription,
    isDone: newIsDone,
    priority: newPriority,
    dueDate: newDueDate,
  });

  const setTask = ({
    title, description, isDone, priority, dueDate,
  } = {}) => {
    newTitle = title || newTitle;
    newDescription = description || newDescription;
    newIsDone = isDone || newIsDone;
    newPriority = priority || newPriority;
    newDueDate = dueDate || newDueDate;
  };

  return { setTask, getTask };
};

export default TaskModel;
