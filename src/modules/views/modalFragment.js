import createFragment from './fragments';
import projectModel from '../models/projectModel';

const modal = () => {
  const createProjectDatalist = () => {
    const createOption = (project) => `<option value="${project}">`;
    const projects = projectModel.store;
    const options = projects.map(createOption).join(' ');
    const datalist = `
              <datalist id="project-option">
              ${options}
              </datalist>`;
    return datalist;
  };

  const formWrapper = (innerHTML = '', classNames = '') => {
    const element = 'div';
    const html = `<form action="#" class="form todo-card d-flex col">${innerHTML}</form>`;
    return { classNames, element, html };
  };

  const newTodoForm = () => {
    const classNames = 'pop-up todo-modal';
    const innerHTML = `
                        <span class="close as-fe">&times;</span>
                        <h2 class="form-title">
                           Add New Todo
                        </h2>
                        <div class="error">Please, enter valid details</div>
                        <div class="input">
                        <label for="todo-title">
                            Title
                        </label>
                        <input
                            placeholder="Title"
                            class="data"
                            type="text"
                            name="title"
                            id="todo-title"
                            minlength="1"
                            required/>
                        </div>
                        <div class="input">
                        <label for="todo-description">
                            Description
                        </label>
                        <input
                            placeholder="Description"
                            class="data"
                            type="text"
                            name="description"
                            minlength="10"
                            id="todo-description"
                            required/>
                        </div>
                        <div class="input">
                        <label for="todo-priority">
                            Due Date
                        </label>
                        <input
                            placeholder="dd/mm/yyy hh:mm"
                            type="datetime-local"
                            class="data"
                            name="dueDate"
                            id="todo-duedate"
                            required/>
                        </div>
                        <div class="input">
                        <label for="todo-priority">
                            Priority
                        </label>
                        <select id="todo-priority" class="data" name="priority" required>
                            <option value="0">Very Low</option>
                            <option value="1">Low</option>
                            <option value="2">Average</option>
                            <option value="3">High</option>
                            <option value="4">Very High</option>
                        </select>
                        </div>
                        <div class="input">
                        <label for="todo-project">
                            Project
                        </label>
                        <input
                        placeholder="Add to project list"
                        list="project-option" class="data" id="todo-project" name="project" required/>
                        ${createProjectDatalist()}
                        </div>
                        <div class="input as-c">
                        <button class="button" type="button" id="add-todo">Add Todo</button>
                        </div>`;

    return createFragment(formWrapper(innerHTML, classNames));
  };

  const newProjectForm = () => {
    const classNames = 'pop-up project-modal';
    const innerHTML = `
                        <span class="close as-fe">&times;</span>
                        <h2 class="form-title">
                        Add New Project
                        </h2>
                        <div class="error">Please, enter valid details</div>
                        <div class="input">
                        <label for="project-name">
                        New Project Name
                        </label>
                        <input
                            placeholder="New Project Name"
                            class="data"
                            type="text"
                            name="title"
                            id="project-name"
                            minlength="1"
                            required/>
                        </div>
                        <div class="input as-c">
                        <button class="button" type="button" id="add-todo">Add Todo</button>
                        </div>`;

    return createFragment(formWrapper(innerHTML, classNames));
  };

  const createDeleteForm = () => {
    const classNames = 'pop-up delete-modal';
    const innerHTML = ` 
                          <span class="close as-fe">&times;</span>
                          <h2 class="form-title as-c">Are you sure you want to delete: <span id="delete-form"></span></h2>
                          <div class="input as-c d-flex col ai-c">
                          <button class="button" data-name="yes" type="button">Yes</button>
                          <button class="button" data-name="no" type="button" >No</button>
                          </div>`;
    return createFragment(formWrapper(innerHTML, classNames));
  };

  return { newTodoForm, newProjectForm, createDeleteForm };
};

export default modal();
