const db = (model = '', defaultValues = []) => {
  const getData = () => {
    const localStore = localStorage.getItem(model);
    if (localStore) {
      return JSON.parse(localStore);
    }
    return [...defaultValues];
  };

  const store = getData();

  const setData = (data, index = store.length) => {
    if (store.includes(data) && index === store.length) {
      return false;
    }
    store[index] = data;
    localStorage.setItem(model, JSON.stringify(store));
    return true;
  };

  const delData = (index) => {
    if (index >= store.length) {
      return false;
    }
    store.splice(index, 1);
    localStorage.setItem(model, JSON.stringify(store));
    return true;
  };

  return { setData, getData, delData };
};

export default db;
