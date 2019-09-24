
import { diststorage } from './js/storage';
import { Task } from './js/task';

const thisstorage = diststorage.getStorage([]);
const content = document.querySelector('#content > start');

const render = () => {
  const html = thisstorage.map(({
    title, shortdescription, completed, author,
  }, index) => `
        <box>
            <box-head>${author} ${title}</box-head>
            <box-body>
                <start data-id="${index}">${shortdescription}</start>
                <end>
                    <button>${completed === 'completed' ? 'completed' : 'no-completed'}</button>
                    <button onclick='document.querySelector(box > box - body > start[data - id="${index}"]').classList.toggle("active")'>collapse</button>
                    <button>delete</button>
                </end>
            </box-body>
            <box-foot>
            </box-foot>
        </box>`);
  content.innerHTML = html.join('');
};

const addTask = (title = 'no title', shortdescription = 'no description', completed = false, author = 'anonymous') => {
  thisstorage.push(Task(title, shortdescription, completed, author));
  content.innerHTML += `
    <box>
        <box-head>${author} ${title}</box-head>
        <box-body>
            <start data-id="${index}">${shortdescription}</start>
            <end>
                <button>${completed === 'completed' ? 'completed' : 'no-completed'}</button>
                <button onclick='document.querySelector(box > box - body > start[data - id="${index}"]').classList.toggle("active")'>collapse</button>
                <button>delete</button>
            </end>
        </box-body>
        <box-foot>
        </box-foot>
    </box>`;
  diststorage.setStorage(thisstorage);
};

const completeTask = () => {
  thisstorage.push(Task(title, shortdescription, completed, author));
  diststorage.setStorage(thisstorage);
};

const deleteTask = (index) => {
  thisstorage.splice(index, index + 1);
  diststorage.setStorage(thisstorage);
};
