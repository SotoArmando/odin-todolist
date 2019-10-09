import createFragment from './fragments';
import projectModel from '../models/projectModel';

const projectListItemFragment = (project, index) => {
  const classNames = 'project-list-item';
  const element = 'li';
  const html = `<button data-id="project-${index}" type="button" class="button">
                   ${project}
                </button>`;
  return createFragment({ classNames, element, html });
};

const appendProjectListItem = (list) => {
  const append = (project, index) => {
    const listItem = projectListItemFragment(project, index);
    return list.appendChild(listItem);
  };
  return append;
};

const projectListFragment = (projects = []) => {
  const classNames = 'project-list';
  const element = 'ul';
  const html = '';
  const projectList = createFragment({ classNames, element, html }).firstElementChild;
  projects.forEach(appendProjectListItem(projectList));
  return projectList;
};

const projectNavBarFragment = () => {
  const projects = projectModel.store;
  const navBarProps = () => {
    const classNames = 'projects-modal d-none d-flex-md col';
    const element = 'nav';
    const html = `
                <div class="projects">
                <h4 class="project-title">projects</h4>
                <button data-action="add-project" class="add-project button">
                  <svg data-action="add-project" class="svg-add" viewBox="0 0 24 24">
                    <path data-action="add-project" fill="#000000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                  </svg>
                </button>
                </div>`;
    return { classNames, element, html };
  };

  const navBarFragment = createFragment(navBarProps());

  const parentNode = navBarFragment.querySelector('.projects');
  const addProjectButton = navBarFragment.querySelector('.add-project.button');

  const projectListElement = projectListFragment(projects);

  parentNode.insertBefore(projectListElement, addProjectButton);

  return navBarFragment;
};

export { projectNavBarFragment, appendProjectListItem };
