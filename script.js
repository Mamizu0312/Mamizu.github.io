
let classlist_home = ["welcome", "introduction", "hobby", "game", "github"];
let classlist_work = ["works", "mcplugin", "others"];
let classlist_contact = ["contact"];

function hideElements(className) {
    var elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++) {
        if(elements.item(i).style.display != "none") {
            elements.item(i).style.display = "none";
        }
    }
}

function revealElements(className) {
    var elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++) {
        if(elements.item(i).style.display != "") {
            elements.item(i).style.display = "";
        }
    }
}


function hideHomeElements() {
    for(let i = 0; i < classlist_home.length; i++) {
        hideElements(classlist_home[i]);
    }
}

function revealHomeElements() {
    for(let i = 0; i < classlist_home.length; i++) {
        revealElements(classlist_home[i]);
    }
}

function hideWorkElements() {
    for(let i = 0; i < classlist_work.length; i++) {
        hideElements(classlist_work[i]);
    }
}

function revealWorkElements() {
    for(let i = 0; i < classlist_work.length; i++) {
        revealElements(classlist_work[i]);
    }
}

function hideContactElements() {
    for(let i = 0; i < classlist_contact.length; i++) {
        hideElements(classlist_contact[i]);
    }
}

function revealContactElements() {
    for(let i = 0; i < classlist_contact.length; i++) {
        revealElements(classlist_contact[i]);
    }
}




function onClickMenuButton_home() {
    revealHomeElements();
    hideWorkElements();
    hideContactElements();
    window.scroll({top: 0, behavior: 'auto'});
}

function onClickMenuButton_work() {
    revealWorkElements();
    hideHomeElements();
    hideContactElements();
    window.scroll({top: 0, behavior: 'auto'});
}

function onClickMenuButton_contact() {
    revealContactElements();
    hideHomeElements();
    hideWorkElements();
    window.scroll({top: 0, behavior: 'auto'});
}
function getHomeButtonElement() {
    return document.getElementById("button_home");
}
function getWorkButtonElement() {
    return document.getElementById("button_work");
}
function getContactButtonElement() {
    return document.getElementById("button_contact");
}

function onMouseEnterMenuButton_home() {
    var button_home = document.getElementById("button_home");
    button_home.style.backgroundColor = "lightgrey";
}
function onMouseLeaveButton_home() {
    var button_home = getHomeButtonElement();
    button_home.style.backgroundColor = "white";
}
function onMouseEnterMenuButton_work() {
    var button_work = getWorkButtonElement();
    button_work.style.backgroundColor = "lightgrey";
}
function onMouseLeaveButton_work() {
    var button_work = getWorkButtonElement();
    button_work.style.backgroundColor = "white";
}
function onMouseEnterMenuButton_contact() {
    var button_contact = getContactButtonElement();
    button_contact.style.backgroundColor = "lightgrey";
}
function onMouseLeaveButton_contact() {
    var button_contact = getContactButtonElement();
    button_contact.style.backgroundColor = "white";
}


var button_home = getHomeButtonElement();
var button_work = getWorkButtonElement();
var button_contact = getContactButtonElement();

button_home.addEventListener('click', onClickMenuButton_home, false);
button_work.addEventListener('click', onClickMenuButton_work, false);
button_contact.addEventListener('click', onClickMenuButton_contact, false);

button_home.addEventListener('mouseenter', onMouseEnterMenuButton_home, false);
button_work.addEventListener("mouseenter", onMouseEnterMenuButton_work, false);
button_contact.addEventListener("mouseenter", onMouseEnterMenuButton_contact, false);

button_home.addEventListener("mouseleave", onMouseLeaveButton_home, false);
button_work.addEventListener("mouseleave", onMouseLeaveButton_work, false);
button_contact.addEventListener("mouseleave", onMouseLeaveButton_contact, false);

window.onload = function (){
    onClickMenuButton_home();
}
