const screens = document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

setTimeout(()=>{

showScreen("envelopeScreen");

},3000);

const openEnvelope=document.getElementById("openEnvelope");

if(openEnvelope){

openEnvelope.onclick=()=>{

showScreen("welcomeScreen");

gsap.from(".card",{

scale:.7,
opacity:0,
duration:.8,
ease:"back.out(1.7)"

});

};

}

const startJourney=document.getElementById("startJourney");

if(startJourney){

startJourney.onclick=()=>{

showScreen("typeScreen");

startTyping();

};

}

const text=

`Dear Sejal,

You are one of the sweetest friends I have.

Thank you for every laugh,
every smile,
and every memory.

This little website is just to remind you that
you are appreciated.

Happy Friendship Day ❤️`;

let index=0;

function startTyping(){

const box=document.getElementById("typingText");

box.innerHTML="";

index=0;

const timer=setInterval(()=>{

box.innerHTML+=text.charAt(index);

index++;

if(index>=text.length){

clearInterval(timer);

}

},35);

}

const continueBtn=document.getElementById("continueBtn");

if(continueBtn){

continueBtn.onclick=()=>{

showScreen("questionScreen");

};

}
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover",moveNo);

noBtn.addEventListener("click",moveNo);

}

function moveNo(){

const container=document.querySelector(".buttons");

const maxX=container.clientWidth-120;

const maxY=150;

const x=Math.random()*maxX-(maxX/2);

const y=Math.random()*maxY-(maxY/2);

noBtn.style.transform=`translate(${x}px,${y}px)`;

}

if(yesBtn){

yesBtn.onclick=()=>{

showScreen("letterScreen");

gsap.from(".letter",{

opacity:0,
y:60,
duration:1,
ease:"power3.out"

});

confetti({

particleCount:180,
spread:120,
origin:{y:.6}

});

};

}

const finalBtn=document.getElementById("finalBtn");

if(finalBtn){

finalBtn.onclick=()=>{

showScreen("finalScreen");

confetti({

particleCount:300,
spread:180,
origin:{y:.55}

});

};

}

const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.onclick=()=>{

confetti({

particleCount:500,
spread:360,
origin:{x:.5,y:.5}

});

};

}
const hearts=document.getElementById("hearts");
const petals=document.getElementById("petals");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>.5?"❤️":"💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(12+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*16)+"px";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},14000);

}

setInterval(createHeart,500);

setInterval(createPetal,900);

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};

}

gsap.from(".card",{

opacity:0,
y:60,
duration:1,
ease:"power3.out"

});

gsap.from(".loaderCard",{

opacity:0,
scale:.8,
duration:1

});

console.log("❤️ Happy Friendship Day, Sejal!");
