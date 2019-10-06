import { diststorage } from './storage';
import { setFocused } from './views';
import { Todo } from './task';



const buildLayout = (proto) => {

    let nav = document.createElement("nav");
    let navstart = document.createElement("start");
    let navend = document.createElement("end");
    let button0 = document.createElement("button");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button0.innerText = "Odin-todo";
    button1.innerText = "All Task";
    button2.innerText = "Completed Task";
    navstart.appendChild(button0);
    navend.appendChild(button1);
    navend.appendChild(button2);
    nav.appendChild(navstart);
    nav.appendChild(navend);
    document.querySelector("body").appendChild(nav);

    let wrapper = document.createElement("wrapper");
    wrapper.id = "content";
    document.querySelector("body").appendChild(wrapper);

    let uxbody = document.createElement("ux-body");
    let box = document.createElement("box");
    let boxtodo = document.createElement("box-todo");
    let boxtitle = document.createElement("title");
    let boxform = document.createElement("form");
    let boxinput0 = document.createElement("input");
    let boxinput1 = document.createElement("input");
    let boxinput2 = document.createElement("input");
    let boxinput3 = document.createElement("input");
    let boxinput4 = document.createElement("input");
    let boxinput5 = document.createElement("input");
    let boxbutton0 = document.createElement("button");
    let boxbutton1 = document.createElement("button");

    boxinput0.setAttribute("name", "title");
    boxinput1.setAttribute("name", "description");
    boxinput2.setAttribute("name", "IsDone");
    boxinput2.setAttribute("type", "checkbox");
    boxinput3.setAttribute("name", "isPriority");
    boxinput3.setAttribute("type", "checkbox");
    boxinput4.setAttribute("name", "date");
    boxinput5.setAttribute("name", "btn_id");

    boxform.appendChild(boxinput0)
    boxform.appendChild(boxinput1)
    boxform.appendChild(boxinput2)
    boxform.appendChild(boxinput3)
    boxform.appendChild(boxinput4)
    boxform.appendChild(boxinput5)

    box.appendChild(boxtitle)
    box.appendChild(boxform)
    boxtodo.appendChild(boxbutton0);
    boxtodo.appendChild(boxbutton1);

    let boxtodotitle = document.createElement("title");
    let boxtodoform = document.createElement("form");
    let boxtodoinput0 = document.createElement("input");
    let boxtodoinput1 = document.createElement("input");
    let boxtodoinput2 = document.createElement("input");
    let boxtodoinput3 = document.createElement("input");
    let boxtodoinput4 = document.createElement("input");
    let boxtodoinput5 = document.createElement("input");
    let boxtodobutton0 = document.createElement("button");
    let boxtodobutton1 = document.createElement("button");

    boxinput0.setAttribute("name", "title");
    boxinput1.setAttribute("name", "description");
    boxinput2.setAttribute("name", "IsDone");
    boxinput2.setAttribute("type", "checkbox");
    boxinput3.setAttribute("name", "isPriority");
    boxinput3.setAttribute("type", "checkbox");
    boxinput4.setAttribute("name", "date");
    boxinput5.setAttribute("name", "btn_id");

    boxtodoform.appendChild(boxtodoinput0)
    boxtodoform.appendChild(boxtodoinput1)
    boxtodoform.appendChild(boxtodoinput2)
    boxtodoform.appendChild(boxtodoinput3)
    boxtodoform.appendChild(boxtodoinput4)
    boxtodoform.appendChild(boxtodoinput5)


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
    boxhead.innerText = `${proto.title} ${proto.IsDone} ${proto.isPriority}`

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
        tasks.reduce((pvalue, cvalue, index, r) => {
            boxbodystart.appendChild(cvalue)
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

    datastorage.setStorage(data);

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
            this.innerText = this.innerText ===  "Complete" ? "Completed" : "Complete" ;
            let data = datastorage.getStorage([])[this.dataset.id];
            debugger;
            data.IsDone = !data.IsDone;
            datastorage.updateTodo(this.dataset.id,data);
            console.log(this.dataset.id)
        });
    })

    document.querySelectorAll("box-body > end > button[data-tone='delete-todo']").forEach(button => {
        button.addEventListener("click", function () {
            datastorage.removeTodo(this.dataset.id);
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
            datastorage.removeTask(this.dataset.id);
            this.parentNode.parentNode.remove();
            
        });
    })

    document.querySelectorAll("box-task > end > button[data-tone='complete-task']").forEach(button => {
        button.addEventListener("click", function () {
            this.innerText = this.innerText ===  "Complete" ? "Completed" : "Complete" ;
            const { 0: todoId, 1: taskId } = this.dataset.id.split("-");
            let data = datastorage.getStorage([])[todoId].tasks[taskId];
            data.IsDone = !data.IsDone;
            datastorage.updateTask(this.dataset.id,data);
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


}

export { renderLayout, buildLayout, renderTask, renderTodo, render }