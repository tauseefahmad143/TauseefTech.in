let isBlue = false;


    let moonIcon = document.querySelector(".fa-moon");
    let logo=document.querySelector(".logo");
    let menuLinks = document.querySelectorAll(".menu a");
    let sunIcon = document.querySelector(".fa-sun");
    let header = document.querySelector("#head");
    let moonBg=document.querySelector(".moon");
    let painBg=document.querySelector(".painting");
    let contents=document.querySelector(".contents");
    let beautiful=document.querySelector(".contents h1 span");
    let explore=document.querySelector(".explore");
    let body=document.querySelector("body");
    let defaultBlue=document.querySelector(".active");
    let defaultyellow=document.querySelector(".color-2")
    let defaultGreen=document.querySelector(".color-3");
    let defaultOrange=document.querySelector(".color-4");
    let defaultTan=document.querySelector(".color-5");

function toggleIcon() {
    if (isBlue) {
        header.style.backgroundColor = "blue";
        moonBg.style.backgroundColor="darkblue";
    	painBg.style.backgroundColor="darkblue";
    	beautiful.style.color="blue";
    	explore.style.backgroundColor="blue";
    	body.style.backgroundColor="#0000ff1a"
        isBlue = false; 
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        header.style.backgroundColor = "black";
        moonBg.style.backgroundColor="black";
    	painBg.style.backgroundColor="black";
    	beautiful.style.color="black";
    	explore.style.backgroundColor="black";
    	body.style.backgroundColor="rgba(0, 0, 0, 0.5)";
        isBlue = true;
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
}

let isClick = false;

function showColor() {
    let colorDiv = document.querySelector('.colors');
    let moveIcon = document.querySelector('.down');

    defaultBlue.style.backgroundColor="darkblue";
    isClick = !isClick;

    if (isClick) {
        colorDiv.style.display = "block";
        moveIcon.style.transform = "rotate(180deg)";
        moonIcon.style.transition="all 0.3s ease";
    } else {
        colorDiv.style.display = "none";
        moveIcon.style.transform = "rotate(0deg)";
        moonIcon.style.transition="all 0.3s ease";
    }
}


function blue() {
	logo.style.color="white"
	defaultBlue.style.backgroundColor="darkblue"
    defaultGreen.style.backgroundColor="green"
    defaultyellow.style.backgroundColor="yellow"
    defaultOrange.style.backgroundColor="orange"
    defaultTan.style.backgroundColor="tan"
        header.style.backgroundColor = "blue";
        moonBg.style.backgroundColor="darkblue";
    	painBg.style.backgroundColor="darkblue";
    	beautiful.style.color="blue";
    	explore.style.backgroundColor="blue";
    	explore.style.color='white'
    	body.style.backgroundColor="#0000ff1a"
}

function yellow()
{
    logo.style.color="black"
	    defaultyellow.style.backgroundColor="#E7DC17";
	    defaultBlue.style.backgroundColor="blue";
        defaultGreen.style.backgroundColor="green"
        defaultOrange.style.backgroundColor="orange"
        defaultTan.style.backgroundColor="tan"
	    header.style.color='black'
        menuLinks.forEach(function(link) {
                link.classList.add("abc");
        });
	    header.style.backgroundColor = "yellow";
        moonBg.style.backgroundColor="#C2BC3F";
        moonBg.style.color='white'
    	painBg.style.backgroundColor="#C2BC3F";
    	painBg.style.color='white'
    	beautiful.style.color="#C2BC3F";
    	explore.style.backgroundColor="yellow";
    	explore.style.color='black'
    	body.style.backgroundColor="#ffa5001a"
}

function green()
{
    logo.style.color="white"
        defaultyellow.style.backgroundColor="yellow";
        defaultBlue.style.backgroundColor="blue";
        defaultGreen.style.backgroundColor="darkgreen"
        defaultOrange.style.backgroundColor="orange"
        defaultTan.style.backgroundColor="tan"
        header.style.color='white'
        menuLinks.forEach(function(link) {
                link.style.color="white";
        });
        header.style.backgroundColor = "green";
        moonBg.style.backgroundColor="darkgreen";
        moonBg.style.color='white'
        painBg.style.backgroundColor="darkgreen";
        painBg.style.color='white'
        beautiful.style.color="green";
        explore.style.backgroundColor="green";
        explore.style.color='white'
        body.style.backgroundColor="#C2FAB5"
}

function orange()
{
    logo.style.color="white"
        defaultyellow.style.backgroundColor="yellow";
        defaultBlue.style.backgroundColor="blue";
        defaultGreen.style.backgroundColor="green"
        defaultOrange.style.backgroundColor="darkorange"
        defaultTan.style.backgroundColor="tan"
        header.style.color='white'
        menuLinks.forEach(function(link) {
                link.style.color="white";
        });
        header.style.backgroundColor = "orange";
        moonBg.style.backgroundColor="darkorange";
        moonBg.style.color='white'
        painBg.style.backgroundColor="darkorange";
        painBg.style.color='white'
        beautiful.style.color="orange";
        explore.style.backgroundColor="orange";
        explore.style.color='white'
        body.style.backgroundColor="#FFE3C4"
}

function tan()
{
    logo.style.color="white"
        defaultyellow.style.backgroundColor="yellow";
        defaultBlue.style.backgroundColor="blue";
        defaultGreen.style.backgroundColor="green"
        defaultOrange.style.backgroundColor="darkorange"
        defaultTan.style.backgroundColor="#918151"
        header.style.color='white'
        menuLinks.forEach(function(link) {
                link.style.color="white";
        });
        header.style.backgroundColor = "tan";
        moonBg.style.backgroundColor="#918151";
        moonBg.style.color='white'
        painBg.style.backgroundColor="#918151";
        painBg.style.color='white'
        beautiful.style.color="tan";
        explore.style.backgroundColor="tan";
        explore.style.color='white'
        body.style.backgroundColor="#ECDEC1"
}