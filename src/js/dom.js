import { diststorage } from './storage';
import { setFocused } from './views';
import { Todo } from './task';



const buildLayout = (proto) => {

    let nav = document.createElement("nav");
    let navstart = document.createElement("start");
    let navmiddle = document.createElement("middle");
    let navend = document.createElement("end");
    let button0 = document.createElement("button");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("select");
    let button4 = document.createElement("button");

    let option0 = document.createElement("option");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");

    option0.innerText = "Default Project";
    option1.innerText = "Project One";


    option0.value = "Todos"
    option1.value = "Project One"



    button3.appendChild(option0);
    button3.appendChild(option1);


    button0.innerText = "Odin-todo";
    button1.innerText = "All Task";
    button2.innerText = "Completed Task";
    button4.innerText = "New Project";

    navstart.appendChild(button0);
    navmiddle.appendChild(button3);
    navend.appendChild(button1);
    navend.appendChild(button2);
    navend.appendChild(button4);
    nav.appendChild(navstart);
    nav.appendChild(navmiddle);
    nav.appendChild(navend);
    document.querySelector("body").appendChild(nav);

    let wrapper = document.createElement("wrapper");
    wrapper.id = "content";
    document.querySelector("body").appendChild(wrapper);



    // <ux-body>
    //     <box>
    //         <form id="task-form">
    //             <title>Add New Task</title>
    //             <input name="title" placeholder="Title" />
    //             <input name="description" placeholder="Description" />
    //             <label>IsDone<input name="IsDone" type="checkbox" placeholder="IsDone" /></label>
    //             <label>IsPriority<input name="isPriority" type="checkbox" placeholder="IsPriority" /></label>
    //             <input name="date" placeholder="Date" />
    //         </form>

    //         <button>confirm</button>
    //         <button>cancel</button>
    //     </box>
    //     <box-todo>
    //         <title>Add New To-do</title>
    //         <form id="todo-form">
    //             <input name="title" placeholder="Title" />
    //             <input name="description" placeholder="Description" />
    //             <label>IsDone<input name="IsDone" type="checkbox" placeholder="IsDone" /></label>
    //             <label>IsPriority<input name="IsPriority" type="checkbox" placeholder="IsPriority" /></label>
    //             <input name="Date" placeholder="Date" type="date" />
    //         </form>
    //         <button>confirm</button>
    //         <button>cancel</button>
    //     </box-todo>
    // </ux-body>

    let uxbody = document.createElement("ux-body");
    
    let box = document.createElement("box");
    let boxtodo = document.createElement("box-todo");
    let boxtitle = document.createElement("title");
    boxtitle.innerText = "Add New Task"
    let boxform = document.createElement("form");
    boxform.setAttribute("id","task-form");
    let boxinput0 = document.createElement("input");
    let boxinput1 = document.createElement("input");
    let boxinput2 = document.createElement("input");
    let boxinput3 = document.createElement("input");
    let boxinput4 = document.createElement("input");
    let boxinput5 = document.createElement("input");
    let boxbutton0 = document.createElement("button");
    let boxbutton1 = document.createElement("button");

    boxbutton0.innerText = "Post"
    boxbutton1.innerText = "Reset"

    boxinput0.setAttribute("name", "title");
    boxinput0.setAttribute("placeholder", "Title");
    boxinput1.setAttribute("name", "description");
    boxinput1.setAttribute("placeholder", "Description");
    boxinput2.setAttribute("name", "IsDone");
    boxinput2.setAttribute("type", "checkbox");
    boxinput3.setAttribute("name", "isPriority");
    boxinput3.setAttribute("type", "checkbox");
    boxinput4.setAttribute("name", "date");
    boxinput4.setAttribute("type", "date");
    boxinput4.setAttribute("placeholder", "Date");
    boxinput5.setAttribute("name", "btn_id");

    let label0 = document.createElement("label");
    let label1 = document.createElement("label");

    label0.innerText = "IsDone"
    label1.innerText = "IsPrority"

    boxform.appendChild(boxinput0)
    boxform.appendChild(boxinput1)
    boxform.appendChild(label0)
    boxform.appendChild(boxinput2)
    boxform.appendChild(label1)
    boxform.appendChild(boxinput3)
    boxform.appendChild(boxinput4)
    


    box.appendChild(boxtitle)
    box.appendChild(boxform)
    box.appendChild(boxbutton0)
    box.appendChild(boxbutton1)


    let boxtodotitle = document.createElement("title");
    boxtodotitle.innerText = "Add New Todo"
    let boxtodoform = document.createElement("form");
    boxtodoform.setAttribute("id","todo-form");
    let boxtodoinput0 = document.createElement("input");
    let boxtodoinput1 = document.createElement("input");
    let boxtodoinput2 = document.createElement("input");
    let boxtodoinput3 = document.createElement("input");
    let boxtodoinput4 = document.createElement("input");
    let boxtodoinput5 = document.createElement("input");
    let boxtodobutton0 = document.createElement("button");
    
    let boxtodobutton1 = document.createElement("button");
    

    boxtodobutton0.innerText = "Post"
    boxtodobutton1.innerText = "Reset"

    boxtodoinput0.setAttribute("name", "title");
    boxtodoinput0.setAttribute("placeholder", "Title");
    boxtodoinput1.setAttribute("name", "description");
    boxtodoinput1.setAttribute("placeholder", "Description");
    boxtodoinput2.setAttribute("name", "IsDone");
    boxtodoinput2.setAttribute("type", "checkbox");
    boxtodoinput3.setAttribute("name", "isPriority");
    boxtodoinput3.setAttribute("type", "checkbox");
    boxtodoinput4.setAttribute("name", "date");
    boxtodoinput4.setAttribute("type", "date");
    boxtodoinput5.setAttribute("name", "btn_id");

    let label2 = document.createElement("label");
    let label3 = document.createElement("label");

    label2.innerText = "IsDone"
    label3.innerText = "IsPrority"

    boxtodoform.appendChild(boxtodoinput0)
    boxtodoform.appendChild(boxtodoinput1)
    boxtodoform.appendChild(label2)
    boxtodoform.appendChild(boxtodoinput2)
    boxtodoform.appendChild(label3)
    boxtodoform.appendChild(boxtodoinput3)
    boxtodoform.appendChild(boxtodoinput4)
    


    boxtodo.appendChild(boxtodotitle);
    boxtodo.appendChild(boxtodoform);
    boxtodo.appendChild(boxtodobutton0);
    boxtodo.appendChild(boxtodobutton1);

    uxbody.appendChild(box);
    uxbody.appendChild(boxtodo);

    document.querySelector("body").appendChild(uxbody);
}

const renderTodo = (proto) => {
    debugger;


    //   <box>
    //     <box-head>
    //         ${proto.title} ${proto.IsDone} ${proto.isPriority}
    //     </box-head>
    //     <box-body>
    //         <start data-id="${proto.id}">
    //           ${proto.description}
    //         </start>
    //         <end>
    //             <button>complete</button>
    //             <button data-id="${proto.id}" >collapse</button>
    //             <button>delete</button>
    //         </end>
    //     </box-body>
    //     <box-foot>
    //         ${proto.tasks.map(task => task.maptoHTML()).join("")}
    //         <button data-id='${proto.id}' onclick='document.querySelector("ux-body > box").classList.toggle("visible")'>Add Task</button>
    //     </box-foot>
    //   </box>

    let box = document.createElement("box");
    let boxhead = document.createElement("box-head");
    // boxhead.innerText = `${proto.title} ${proto.IsDone} ${proto.isPriority}`
    boxhead.innerText = `${proto.title}`

    let boxbody = document.createElement("box-body");
    let boxbodystart = document.createElement("start");
    let span = document.createElement("span");
    span.innerText = proto.description;
    console.log("proto.description", proto.description)
    boxbodystart.appendChild(span);
    boxbodystart.setAttribute("data-id", proto.id);

    let boxbodyend = document.createElement("end");
    let boxfoot = document.createElement("box-foot");
    let tasks = proto.tasks.map(task => task.maptoHTML());
    let button0 = document.createElement("button");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    button3.setAttribute("data-id", proto.id)
    button3.onclick = () => { document.querySelector("ux-body > box").classList.toggle("visible") };
    button3.innerText = "Add Task"

    box.appendChild(boxhead)

    if (tasks.length > 0) {
        tasks.forEach((value) => {
            boxbodystart.appendChild(value)
        });
    }

    boxbody.appendChild(boxbodystart)
    button0.innerText = proto.IsDone ? "Completed" : "Complete";
    button0.setAttribute("data-tone", "complete-todo")
    button0.setAttribute("data-id", proto.id)

    boxbodyend.appendChild(button0);
    button1.innerText = "collapse"
    button1.setAttribute("data-tone", "collapse-todo")
    button1.setAttribute("data-id", proto.id)

    boxbodyend.appendChild(button1);
    button2.innerText = "delete"
    button2.setAttribute("data-tone", "delete-todo")
    button2.setAttribute("data-id", proto.id)

    boxbodyend.appendChild(button2);
    boxbody.appendChild(boxbodyend)
    box.appendChild(boxbody)

    boxfoot.appendChild(button3)
    box.appendChild(boxfoot)

    return box;
}

const renderTask = (proto) => {



    //   <box-task>
    //     <start data-id="${proto.id}">${proto.description}</start>
    //     <end>
    //       <button>${IsDone ? 'Completed' : 'complete'}</button>
    //       <button data-id="${proto.id}">collapse</button>
    //       <button>delete</button>
    //     </end>
    //   </box-task>

    let boxtask = document.createElement("box-task")
    let start = document.createElement("start")
    start.setAttribute("data-id", proto.id)
    start.textContent = proto.description
    let end = document.createElement("end")
    let button0 = document.createElement("button")
    button0.setAttribute("data-tone", "complete-task")
    button0.setAttribute("data-id", proto.id);

    debugger;

    button0.innerText = proto.IsDone ? 'Completed' : 'Complete'

    let button1 = document.createElement("button")
    button1.setAttribute("data-tone", "collapse-task")
    button1.setAttribute("data-id", proto.id)
    button1.innerText = "collapse"

    let button2 = document.createElement("button")
    button2.setAttribute("data-tone", "delete-task")
    button2.setAttribute("data-id", proto.id)
    button2.innerText = "delete"

    boxtask.appendChild(start)
    end.appendChild(button0)
    end.appendChild(button1)
    end.appendChild(button2)
    boxtask.appendChild(end)

    return boxtask;
}

const renderLayout = () => {

}
const render = (data) => {
    debugger;

    const datastorage = diststorage();

    datastorage.setStorage(data, document.querySelector("nav select").value);

    let content = document.querySelector("#content");
    content.innerHTML = "";
    let wrapper = document.querySelector("wrapper");
    let wrapperstart = document.createElement("start");

    wrapper.appendChild(wrapperstart);

    if (data.length > 0) {
        data = data.map((item, index) => Todo(index, item));
    }

    var result = []

    if (data.length > 0) {
        result = data.map(item => item.maptoHTML());
    }

    if (result.length > 0) {
        result.forEach((value) => wrapperstart.appendChild(value))
    }

    let addTodobutton = document.createElement("button");
    addTodobutton.innerText = "Add Todo"
    addTodobutton.onclick = () => {
        document.querySelector("ux-body > box-todo").classList.toggle("visible")
    }

    wrapperstart.appendChild(addTodobutton);

    document.querySelectorAll("box-body > end > button[data-tone='collapse-todo']").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector('box > box-body > start[data-id="' + this.dataset.id + '"]').classList.toggle('active')
        });
    })

    document.querySelectorAll("box-body > end > button[data-tone='complete-todo']").forEach(button => {
        button.addEventListener("click", function () {
            this.innerText = this.innerText === "Complete" ? "Completed" : "Complete";
            let data = datastorage.getStorage([])[this.dataset.id];
            debugger;
            data.IsDone = !data.IsDone;
            datastorage.updateTodo(this.dataset.id, data, document.querySelector("nav select").value);
            console.log(this.dataset.id)
        });
    })

    document.querySelectorAll("box-body > end > button[data-tone='delete-todo']").forEach(button => {
        button.addEventListener("click", function () {
            datastorage.removeTodo(this.dataset.id, document.querySelector("nav select").value);
            this.parentNode.parentNode.parentNode.remove();

        });
    })

    document.querySelectorAll("box-task > end > button[data-tone='collapse-task']").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector('box-task > start[data-id="' + this.dataset.id + '"]').classList.toggle('active')
        });
    })

    document.querySelectorAll("box-task > end > button[data-tone='delete-task']").forEach(button => {
        button.addEventListener("click", function () {
            datastorage.removeTask(this.dataset.id, document.querySelector("nav select").value);
            this.parentNode.parentNode.remove();

        });
    })

    document.querySelectorAll("box-task > end > button[data-tone='complete-task']").forEach(button => {
        button.addEventListener("click", function () {
            this.innerText = this.innerText === "Complete" ? "Completed" : "Complete";
            const { 0: todoId, 1: taskId } = this.dataset.id.split("-");
            let data = datastorage.getStorage([])[todoId].tasks[taskId];
            data.IsDone = !data.IsDone;
            datastorage.updateTask(this.dataset.id, data, document.querySelector("nav select").value);
            console.log(this.dataset.id)
        });
    })

    document.querySelectorAll("box-foot > button[data-id]").forEach(button => {
        button.addEventListener("click", function () {
            setFocused(this.dataset.id);
            console.log("focused " + this.dataset.id)
        });
    })

    document.querySelectorAll("box-body > button[data-id]").forEach(button => {
        button.addEventListener("click", function () {
            setFocused(this.dataset.id);
            console.log("focused " + this.dataset.id)
        });
    })

    document.querySelector("nav select").addEventListener("change", function () {
        datastorage.switchProject(this.value)
    })




}

export { renderLayout, buildLayout, renderTask, renderTodo, render }