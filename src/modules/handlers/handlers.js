import projectModel from '../models/projectModel';
import taskModel from '../models/taskModel';
import { appendProjectListItem } from '../views/projectsView';
import { refreshTodoList, todoListFilter } from '../views/todoListView';
import navBarFragment from '../views/mainNavBar';
import mainSectionFragment from '../views/mainView';
import modal from '../views/modalFragment';

const getElement = (selector, parentNode = document) => parentNode.querySelector(selector);

export const toggleNavMenu = (targetClass, toggleClass) => {
  const targetElement = getElement(targetClass);
  const toggleElement = getElement(toggleClass);
  const toggleHideClass = () => toggleElement.classList.toggle('d-none');
  targetElement.addEventListener('click', toggleHideClass);
  toggleElement.addEventListener('click', toggleHideClass);
};

export const toggleProjectMenu = (targetClass, toggleClass) => {
  const targetElement = getElement(targetClass);
  const toggleElement = getElement(toggleClass);
  const toggleHideClass = ({ target, currentTarget }) => {
    if (target !== currentTarget) { return; }
    toggleElement.classList.toggle('d-none');
  };
  targetElement.addEventListener('click', toggleHideClass);
  toggleElement.addEventListener('click', toggleHideClass);
};

export const loadViews = (selector) => {
  const mainContent = getElement(selector);
  mainContent.appendChild(navBarFragment());
  mainContent.appendChild(mainSectionFragment());
};

const eventHandlers = (rootSelector) => {
  const mainContent = getElement(rootSelector);

  const toggleModal = (modalClass = '', listClass = '', position) => {
    const validateForm = (element, valid) => element.classList.toggle('active', valid);

    const addProjectFormDataToStore = (form, list) => {
      const formData = getElement(`${form} .data`);
      const formErrorElement = getElement(`${form} .error`);
      const { value, validity: { valid = true } } = formData;

      const index = position || projectModel.store.length;
      if (valid && projectModel.setProject(value)) {
        appendProjectListItem(list)(value, index);
        return valid;
      }
      validateForm(formErrorElement, true);
      return false;
    };

    const addTodoFormDataToStore = (form) => {
      let isValid = true;
      const formData = document.querySelectorAll(`${form} .data`);
      const formErrorElement = getElement(`${form} .error`);
      const newData = {};
      const invalidFields = [];
      const getFormData = ({ name, value, validity: { valid = true } }) => {
        if (!valid) {
          isValid = valid;
          invalidFields.push(name);
        }
        newData[name] = value;
      };

      formData.forEach(getFormData);
      if (isValid) {
        const index = position === undefined ? taskModel().store.length : position;
        taskModel().setTask(newData, index);
        refreshTodoList();
      } else { validateForm(formErrorElement, !isValid); }

      return isValid;
    };

    const addFormDataToStore = (form, list) => {
      if (modalClass === '.pop-up.todo-modal') {
        return addTodoFormDataToStore(form);
      }
      return addProjectFormDataToStore(form, list);
    };

    const toggleElement = getElement(modalClass);
    const closeElement = getElement(`${modalClass} .close`);
    const buttonElement = getElement(`${modalClass} .button`);
    const listElement = getElement(listClass);

    const openModalForm = () => toggleElement.classList.add('show');

    const closeModalForm = ({ target, currentTarget }) => {
      switch (target) {
        case buttonElement:
          if (!addFormDataToStore(modalClass, listElement)) { return; }
          break;
        case closeElement:
          break;
        case currentTarget:
          break;
        default:
          return;
      }
      toggleElement.classList.remove('show');
      mainContent.removeChild(toggleElement);
    };

    openModalForm();
    toggleElement.addEventListener('click', closeModalForm);
  };

  const confirmDelete = (index) => {
    mainContent.appendChild(modal.createDeleteForm());
    const deleteTodoForm = getElement('.pop-up.delete-modal');

    const formTitle = deleteTodoForm.querySelector('#delete-form');
    formTitle.textContent = taskModel().store[index].title;

    deleteTodoForm.classList.add('show');

    const getResponse = ({ target: { dataset: { name } } }) => {
      if (name === 'yes' && taskModel().deleteTask(index)) {
        refreshTodoList();
      }
      deleteTodoForm.classList.remove('show');
      mainContent.removeChild(deleteTodoForm);
    };

    deleteTodoForm.addEventListener('click', getResponse);
  };

  const toggleTodoComplete = (index) => {
    taskModel().toggleIsDone(index);
    refreshTodoList();
  };

  const changePriorityLevel = (index, newPriorityLevel) => {
    taskModel().changePriority(index, newPriorityLevel);
    refreshTodoList();
  };

  const toggleDetails = (element, index, props = {}) => {
    const buttonElement = element;
    const {
      oldClass, newClass, newAction, newText,
    } = props;
    const detailsElement = getElement(`.todo-description-card.details-${index}`);
    detailsElement.classList.replace(oldClass, newClass);
    element.setAttribute('data-action', newAction);
    element.setAttribute('title', newText);
    buttonElement.textContent = newText;
  };

  const addNewTodo = () => {
    const todoForm = modal.newTodoForm();
    mainContent.appendChild(todoForm);
    toggleModal('.pop-up.todo-modal', '.todo-list');
  };

  const addNewProject = () => {
    const projectForm = modal.newProjectForm();
    mainContent.appendChild(projectForm);
    toggleModal('.pop-up.project-modal', '.projects .project-list');
  };

  const editTodoDetails = (index) => {
    mainContent.appendChild(modal.newTodoForm());
    const oldDetails = taskModel().store[index];
    const todoForm = getElement('.pop-up.todo-modal');

    const populateForm = (form, data) => {
      const formInput = form.querySelectorAll('input');
      formInput.forEach((input, pos) => {
        const { name } = input;
        if (!name) { return; }
        formInput[pos].setAttribute('value', data[name]);
      });
    };

    todoForm.querySelector('.form-title').textContent = 'Edit Todo Details';
    populateForm(todoForm, oldDetails);

    toggleModal('.pop-up.todo-modal', '.todo-list', index);
  };
  return {
    confirmDelete,
    toggleTodoComplete,
    changePriorityLevel,
    toggleDetails,
    addNewTodo,
    addNewProject,
    editTodoDetails,
  };
};

export const handleDataActions = (rootSelector) => {
  const handlers = eventHandlers(rootSelector);
  const dataActionsListerners = ({ target, target: { dataset: { action = '', id = '' } } }) => {
    if (!action) { return; }
    const index = Number.parseInt(id, 10);
    switch (action) {
      case 'delete':
        handlers.confirmDelete(index);
        break;
      case 'complete-toggle':
        handlers.toggleTodoComplete(index);
        break;
      case 'show-details':
        handlers.toggleDetails(target, index, {
          oldClass: 'd-none',
          newClass: 'd-flex',
          newAction: 'hide-details',
          newText: 'Hide Details',
        });
        break;
      case 'hide-details':
        handlers.toggleDetails(target, index, {
          oldClass: 'd-flex',
          newClass: 'd-none',
          newAction: 'show-details',
          newText: 'Show Details',
        });
        break;
      case 'edit-todo':
        handlers.editTodoDetails(index);
        break;
      case 'add-todo':
        handlers.addNewTodo();
        break;
      case 'add-project':
        handlers.addNewProject();
        break;
      case 'priority-0':
        handlers.changePriorityLevel(index, 0);
        break;
      case 'priority-1':
        handlers.changePriorityLevel(index, 1);
        break;
      case 'priority-2':
        handlers.changePriorityLevel(index, 2);
        break;
      case 'priority-3':
        handlers.changePriorityLevel(index, 3);
        break;
      case 'priority-4':
        handlers.changePriorityLevel(index, 4);
        break;

      default:
        break;
    }
  };
  return dataActionsListerners;
};

export const handleTodoFilters = ({ target: { dataset: { filterType = '', filterValue = '' } } }) => {
  if (!filterType && !filterValue) { return; }
  const newFilter = { type: filterType, value: filterValue };
  todoListFilter().setFilter(newFilter);
  refreshTodoList();
};
