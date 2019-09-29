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
    boxinput2.setAttribute("name", "isDone");
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
    boxinput2.setAttribute("name", "isDone");
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

    

    //   <box>
    //     <box-head>
    //         ${proto.title} ${proto.isDone} ${proto.isPriority}
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
    boxhead.innerText = `${proto.title} ${proto.isDone} ${proto.isPriority}`

    let boxbody = document.createElement("box-body");
    let boxbodystart = document.createElement("start");
    let span =  document.createElement("span");
    span.innerText = proto.description;
    boxbodystart.appendChild(span);
    boxbodystart.setAttribute("data-id", proto.id);

    let boxbodyend = document.createElement("end");
    let boxfoot = document.createElement("box-foot");
    let tasks = proto.tasks.map(task => task.maptoHTML());
    let button0 = document.createElement("button");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    button3.setAttribute("data-id",proto.id)
    button3.onclick = () => { document.querySelector("ux-body > box").classList.toggle("visible") };
    button3.innerText = "Add Task"

    box.appendChild(boxhead)
    
    if (tasks.length > 0) {
        tasks.reduce((pvalue, cvalue, index, r) => {
            boxbodystart.appendChild(cvalue)
        });
    }
    
    boxbody.appendChild(boxbodystart)
    button0.innerText = "complete";

    boxbodyend.appendChild(button0);
    button1.innerText = "collapse"
    button1.setAttribute("data-id",proto.id)

    boxbodyend.appendChild(button1);
    button2.innerText = "delete"

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
    //       <button>${isDone ? 'Completed' : 'no-Completed'}</button>
    //       <button data-id="${proto.id}">collapse</button>
    //       <button>delete</button>
    //     </end>
    //   </box-task>

    let boxtask = document.createElement("box-task")
    let start = document.createElement("start")
    start.textContent = proto.description
    let end = document.createElement("end")
    let button0 = document.createElement("button")
    button0.innerText = proto.isDone ? 'Completed' : 'no-Completed'
    let button1 = document.createElement("button")
    button1.setAttribute("data-id",proto.id)
    button1.innerText = "collapse"
    let button2 = document.createElement("button")
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

export { renderLayout, buildLayout, renderTask, renderTodo }