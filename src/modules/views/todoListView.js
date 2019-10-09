import createFragment from './fragments';
import taskModel from '../models/taskModel';
import formatDate from '../helpers/date';

const todoListItemFragment = (todo, index) => {
  const classNames = `todo-list-item list-${index}`;
  const dueDate = formatDate.toDueDate(todo.dueDate);
  const dueTime = formatDate.toFullDateWithTime(todo.dueDate);
  const element = 'li';
  const html = `<section class="todo-card list-${index} d-flex col">
                <div class="todo-header d-flex jc-sb ai-c">
                <h4 class="todo-title">${todo.title}</h4>
                <div class="todo-priority d-flex level-${todo.priority}">
                    <svg data-action="priority-0" data-id="${index}" class="svg-rating" viewBox="0 0 24 24">
                    <path data-action="priority-0" data-id="${index}"
                        fill="#000000"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                    </svg>
                    <svg  data-action="priority-1" data-id="${index}" class="svg-rating" viewBox="0 0 24 24">
                    <path data-action="priority-1" data-id="${index}"
                        fill="#000000"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                    </svg>
                    <svg data-action="priority-2" data-id="${index}" class="svg-rating" viewBox="0 0 24 24">
                    <path data-action="priority-2" data-id="${index}"
                        fill="#000000 four"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                    </svg>
                    <svg data-action="priority-3" data-id="${index}" class="svg-rating" viewBox="0 0 24 24">
                    <path data-action="priority-3" data-id="${index}"
                        fill="#000000"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                    </svg>
                    <svg data-action="priority-4" data-id="${index}" class="svg-rating" viewBox="0 0 24 24">
                    <path data-action="priority-4" data-id="${index}"
                        fill="#000000"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                    </svg>
                </div>
                </div>
                <p class="todo-due-date">Due <time datetime="${todo.dueDate}">${dueDate}</time></p>
                <div class="todo-control-panel d-flex jc-sb wrap">
                <button data-action="show-details" data-id="${index}" title="Show Details" class="button">Show Details</button>
                <button data-action="edit-todo" data-id="${index}" title="Edit Todo" class="button">
                    <svg data-action="edit-todo" data-id="${index}" class="svg-edit" viewBox="0 0 24 24">
                    <path data-action="edit-todo" data-id="${index}"
                        fill="#000000"
                        d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                    />
                    </svg>
                </button>
                <button data-action="complete-toggle" data-id="${index}" title="Complete" class="button ${todo.isDone ? 'done' : 'not-done'}">
                    <svg data-action="complete-toggle" data-id="${index}" class="svg-complete" viewBox="0 0 24 24">
                    <path data-action="complete-toggle" data-id="${index}"
                        fill="#000000"
                        d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                    />
                    </svg>
                </button>
                <button data-action="delete" data-id="${index}" title="Delete" class="button">
                    <svg data-action="delete" data-id="${index}" class="svg-delete" viewBox="0 0 24 24">
                    <path data-action="delete" data-id="${index}" fill="#000000"
                        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                    />
                    </svg>
                </button>
                </div>
                <div class="todo-description-card d-none details-${index} jc-sb col">
                <p class="todo-description grow-1" data-id="${index}">${todo.description}</p>
                <p class="todo-description">Project: ${todo.project}</p>
                <p class="todo-description-due-date">Due date and time: ${dueTime}</p>
                </div>
            </section>`;
  return createFragment({ classNames, element, html });
};

const appendTodoListItem = (list) => {
  const append = (todo, index, isNew) => {
    const listItem = todoListItemFragment(todo, index);
    if (isNew) {
      return list.appendChild(listItem);
    }
    const oldChild = list.querySelector(`.todo-list-item.list-${index}`);
    return list.replaceChild(listItem, oldChild);
  };
  return append;
};

const todoListFragment = () => {
  const todos = taskModel().store;
  const classNames = 'todo-list';
  const element = 'ul';
  const html = '';
  const todoList = createFragment({ classNames, element, html })
    .firstElementChild;
  todos.forEach(appendTodoListItem(todoList));
  return todoList;
};


const refreshTodoList = () => {
  const todoSectionElement = document.querySelector('.todo-section');
  const currentTodoList = todoSectionElement.querySelector('.todo-list');
  const newTodoList = todoListFragment();
  if (todoSectionElement && currentTodoList) {
    todoSectionElement.replaceChild(newTodoList, currentTodoList);
  }
};

export { todoListFragment, appendTodoListItem, refreshTodoList };
