const Todo = (id, { title, tasks, description, isDone = false, isPriority = false, date }) => {

  const proto = {
    title: 'No title' || title,
    description: 'No description'|| description,
    isDone,
    isPriority,
    date,
    tasks : tasks.map((task,index) => Task(`${id}-${index}`,task)),
    id,
    type: 'Todo',
  }

  const remove = () => { }
  const getTaskId = () => proto.tasks.length
  const toggleDone = () => { proto.isDone = !proto.isDone; }
  const togglePriority = () => { proto.isPriority = !proto.isPriority; }
  const addTask = (task) => { proto.tasks.push(task); }
  const maptoHTML = () => `
  <box>
    <box-head>
        ${proto.title} ${proto.isDone} ${proto.isPriority}
    </box-head>
    <box-body>
        <start data-id="${proto.id}">
          ${proto.description}
        </start>
        <end>
            <button>complete</button>
            <button data-id="${proto.id}" >collapse</button>
            <button>delete</button>
        </end>
    </box-body>
    <box-foot>
        ${proto.tasks.map(task => task.maptoHTML()).join("")}
        <button data-id='${proto.id}' onclick='document.querySelector("ux-body > box").classList.toggle("visible")'>Add Task</button>
    </box-foot>
  </box>
`
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
  const maptoHTML = () => `
  <box-task>
    <start data-id="${proto.id}">${proto.description}</start>
    <end>
      <button>${isDone ? 'Completed' : 'no-Completed'}</button>
      <button data-id="${proto.id}">collapse</button>
      <button>delete</button>
    </end>
  </box-task>
  `;
  return { maptoHTML }
}


export { Todo, Task };



