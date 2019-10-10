import {
  toggleNavMenu,
  toggleProjectMenu,
  handleDataActions,
  loadViews,
  handleTodoFilters,
} from './modules/handlers/handlers';

const startApp = () => {
  loadViews('#content');
  toggleNavMenu('.nav-menu', '.nav-list');
  toggleProjectMenu('.show-project-nav', '.projects-modal');

  document.addEventListener('click', handleDataActions('#content'));
  document.addEventListener('click', handleTodoFilters);
};

startApp();
