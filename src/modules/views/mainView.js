import createFragment from './fragments';
import todoSectionFragment from './todoSectionView';
import { projectNavBarFragment } from './projectsView';

const mainSectionFragment = () => {
  const mainSectionProps = () => {
    const classNames = 'main d-flex';
    const element = 'main';
    return { classNames, element };
  };

  const mainSection = createFragment(mainSectionProps());
  const todoSectionElement = todoSectionFragment();
  const projectNavBarElement = projectNavBarFragment();

  mainSection.firstElementChild.appendChild(projectNavBarElement);
  mainSection.firstElementChild.appendChild(todoSectionElement);

  return mainSection;
};

export default mainSectionFragment;
