import createFragment from './fragments';
import { todoListFragment } from './todoListView';
import formatDate from '../helpers/date';

const todoSectionFragment = () => {
  const sectionProps = () => {
    const classNames = 'todo-section d-flex col';
    const element = 'section';
    const today = formatDate.toFullDate();
    const html = `<div class="todo-section-header d-flex jc-sb ai-c">
                    <button class="button show-project-nav">Show Projects</button>
                    <h2 class="today-date"><time datetime="2019-09-25">${today}</time></h2>
                  </div>`;
    return { classNames, element, html };
  };

  const addTodoButtonProps = () => {
    const classNames = 'add-todo button';
    const element = 'button';
    const html = `<svg data-action="add-todo" class="svg-add" viewBox="0 0 24 24">
                    <path data-action="add-todo" fill="#000000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                  </svg>`;
    const otherAttributes = [{ name: 'data-action', value: 'add-todo' }];
    return {
      classNames, element, html, otherAttributes,
    };
  };
  const todoSection = createFragment(sectionProps());
  const addTodoButton = createFragment(addTodoButtonProps());
  const todoListElement = todoListFragment();

  todoSection.firstElementChild.appendChild(todoListElement);
  todoSection.firstElementChild.appendChild(addTodoButton);

  return todoSection;
};

export default todoSectionFragment;
