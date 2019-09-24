const renderHomePage = (root) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
        <nav>
        <start>
            <button>Odin-todo</button>
        </start>
        <end>
            <button>All Task</button>
            <button>Completed Task</button>
        </end>
        </nav>
        <wrapper id="content">
        <start>
            <box>
                <box-head>
                    This is a Note :D
                </box-head>
                <box-body>
                    <start data-id="1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio dignissimos nisi!
                        Vero
                        nam harum tempore in consequuntur, fugiat fugit sapiente laborum quae neque nostrum quia
                        accusantium
                        laboriosam sunt rem?
                    </start>
                    <end>
                        <button>complete</button>
                        <button>collapse</button>
                        <button>delete</button>
                    </end>
                </box-body>
                <box-foot>
                </box-foot>
            </box>
        </start>
        <end></end>
    </wrapper>`;

  root.appendChild(divElement);
};

const newTaskElement = (element, task, index) => {
  const {
    title, description, isDone, priority, dueDate,
  } = task;
  element.innerHTML = `
              <section data-id="${index}" class="task">
                  <h2 class="task-title>${title}</h2>
                  <p>${description}</p>
                  <button class="status">Status: ${isDone ? 'completed' : 'not completed'}</button>
                  <p>Due: ${dueDate}</p>
                  <p>priority: ${priority}</p>
                  <button>collapse</button>
                  <button>delete</button>
              </section>`;
  return element;
};

const addTask = (parent, task, index) => {
  const divElement = document.createElement('div');
  newTaskElement(divElement, task, index);

  parent.appendChild(divElement);
  return parent;
};


const renderTask = (parent, data) => {
  const taskFragment = document.createDocumentFragment();
  const loadTask = (task, index) => addTask(taskFragment, task, index);

  data.forEach(loadTask);
  parent.appendChild(taskFragment);
  return parent;
};

const updateTask = (task, index) => {
  const taskElement = document.querySelector(`[data-id=${index}]`);
  newTaskElement(taskElement, task, index);
};

const deleteTask = (index) => {
  const taskElement = document.querySelector(`[data-id=${index}]`);
  taskElement.remove();
};


export default {
  renderHomePage, renderTask, addTask, updateTask, deleteTask,
};
