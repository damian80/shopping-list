let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// function declarations //

function inputLength(){
    return input.value.length
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value= "";
}

function addListAfterClick() {
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLength()>0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);