import db from './db';

const projectModel = () => {
  const projectStore = db('project', ['Personal', 'Work']);
  const getProject = () => projectStore.getData();

  const store = getProject() || [];

  const setProject = (data = '', index = store.length) => {
    if (store.includes(data)) {
      return false;
    }
    projectStore.setData(data, index);
    return true;
  };

  return { store, setProject };
};

export default projectModel();
