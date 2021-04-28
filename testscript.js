myitem = document.getElementById("firsttest");//finds an element in the html based off its id and sets it to a javaScript variable

myitem.addEventListener("click", onClick);//adds a listener to lsiten for the "click" event and call the "onClick" function when "click" is recognized

function onClick() {  //defines the "onClick" function
    myitem.style.color = "green";  //sets the color of the html element to green
}


myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut(){
    myitem.style.color = "";
}


thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
isClicked = false;

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    if(isClicked){
        otheritem.style.color = "";
        isClicked = false;
        thebutton.textContent  = "Make the text Red!";
    }
    else{
        otheritem.style.color = "red";  
        isClicked = true
        thebutton.textContent  = "Change back to original";
    }
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

expList = document.getElementById("expList");
expButton = document.getElementById("expButton");
isExpClicked = false;

expButton.addEventListener("click", onExpClick);

function onExpClick(){
    if(isExpClicked){
        expList.style.display = block;
        isExpClicked = false;
        expButton.textContent = "Hide Experience";
    }
    else{
        expList.style.display = none;
        isExpClicked = true;
        expButton.textContent = "Show Experience";
    }
}