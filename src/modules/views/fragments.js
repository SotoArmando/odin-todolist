const createFragment = (props = {}) => {
  const {
    classNames = '', element = 'div', html = '', otherAttributes = [],
  } = props;
  const documentFragment = document.createDocumentFragment();
  const newElement = document.createElement(element);
  if (classNames.length > 0) {
    newElement.classList.add(...classNames.split(' '));
  }
  newElement.innerHTML = html;
  if (otherAttributes.length) {
    otherAttributes.forEach(({ name, value }) => {
      newElement.setAttribute(name, value);
    });
  }
  documentFragment.appendChild(newElement);
  return documentFragment;
};

export default createFragment;
