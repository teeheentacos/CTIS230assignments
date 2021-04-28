expList = document.getElementById("expList");
expButton = document.getElementById("expButton");
isClicked = false;


expButton.addEventListener("click", onExpClick);

function onExpClick(){
    if(isClicked){
        expList.style.display = "none";
        expButton.textContent = "Show Experience";
        isClicked = false;
    }
    else{
    expList.style.display = "block";
    expButton.textContent = "Hide Experience";
    isClicked = true;
    }

}

