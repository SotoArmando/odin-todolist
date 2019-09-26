const buildLayout = () => {

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

const renderLayout = () => {

}

export { renderLayout, buildLayout }