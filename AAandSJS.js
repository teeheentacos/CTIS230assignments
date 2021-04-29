awardButton = document.getElementById("awardButton");
awardList = document.getElementById("awardList");
awardIsClicked = false;

awardButton.addEventListener("click", onAwardClick);

function onAwardClick(){
    if(awardIsClicked){
        awardList.style.display = "none";
        awardButton.textContent = "Show Awards";
        awardIsClicked = false;
    }
    else{
    awardList.style.display = "block";
    awardButton.textContent = "Hide Awards";
    awardIsClicked = true;
    }
}

activityButton = document.getElementById("activityButton");
activityList = document.getElementById("activityList");
activityIsClicked = false;

activityButton.addEventListener("click", onActivityClick);

function onActivityClick(){
    if(activityIsClicked){
        activityList.style.display = "none";
        activityButton.textContent = "Show Extracurricular Activities";
        activityIsClicked = false;
    }
    else{
    activityList.style.display = "block";
    activityButton.textContent = "Hide Extracurricular Activities";
    activityIsClicked = true;
    }
}

skillButton = document.getElementById("skillButton");
skillList = document.getElementById("skillList");
skillIsClicked = false;

skillButton.addEventListener("click", onSkillClick);

function onSkillClick(){
    if(skillIsClicked){
        skillList.style.display = "none";
        skillButton.textContent = "Show Skills";
        skillIsClicked = false;
    }
    else{
    skillList.style.display = "block";
    skillButton.textContent = "Hide Skills";
    skillIsClicked = true;
    }
}

robotImage = document.getElementById("Robot");
robotImage.addEventListener("click", expandImage);
var x = window.matchMedia("(orientation:landscape)")

function expandImage(){
    if(robotImage.style.position == ""){
        robotImage.style.position = "absolute";
        robotImage.style.width = "50%";
        if(x.matches){
            robotImage.style.top =  "400px";
            robotImage.style.bottom  = "20%";
        }
    }

    else if(robotImage.style.position == "absolute"){
        robotImage.style.position = "";
        robotImage.style.width = "100px";
    }
}

 