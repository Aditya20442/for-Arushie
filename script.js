/* =======================================================
   SCRIPT.JS
   PART 1 / 4
======================================================= */

const screens = document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

/* =========================
   LOADING
========================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

showScreen("envelopeScreen");

animateEnvelope();

},3200);

});

/* =========================
   ENVELOPE
========================= */

const envelope=document.querySelector(".envelope");
const openEnvelope=document.getElementById("openEnvelope");

function animateEnvelope(){

gsap.from(".envelope",{

y:-120,

opacity:0,

rotation:-8,

duration:1.2,

ease:"bounce.out"

});

gsap.to(".envelope",{

y:-8,

repeat:-1,

yoyo:true,

duration:2,

ease:"sine.inOut"

});

}

openEnvelope.addEventListener("click",()=>{

gsap.to(".envelope",{

scale:1.08,

rotation:4,

duration:.25

});

gsap.to(".envelope",{

scale:0,

opacity:0,

delay:.35,

duration:.45,

onComplete:()=>{

showScreen("welcomeScreen");

welcomeAnimation();

}

});

});

/* =========================
   WELCOME
========================= */

function welcomeAnimation(){

gsap.from(".mainCard",{

opacity:0,

y:80,

scale:.9,

duration:1,

ease:"power3.out"

});

}

const beginJourney=document.getElementById("beginJourney");

beginJourney.addEventListener("click",()=>{

showScreen("storyScreen");

startTypewriter();

});

/* =========================
   TYPEWRITER
========================= */

const story=`There are many people in life...

Some become memories.

Some become lessons.

But a few become the friends
you never want to lose.

Thank you for being one of them.

Happy Friendship Day,
Sejal. 💙`;

let i=0;

function startTypewriter(){

const box=document.getElementById("typewriter");

box.innerHTML="";

i=0;

const typing=setInterval(()=>{

box.innerHTML+=story.charAt(i);

i++;

if(i>=story.length){

clearInterval(typing);

}

},32);

}

const nextStory=document.getElementById("nextStory");

nextStory.addEventListener("click",()=>{

showScreen("cartoonScreen");

startCartoon();

});
/* =========================
   CARTOON SCENE
========================= */

function startCartoon(){

gsap.from(".cartoonCard",{

opacity:0,

scale:.92,

duration:.8

});

const yash=document.querySelector(".friend.yash");
const sejal=document.querySelector(".friend.sejal");
const hearts=document.querySelector(".heartsBetween");

/* Wave */

gsap.to(yash,{

rotation:-10,

transformOrigin:"bottom center",

repeat:3,

yoyo:true,

duration:.25,

onComplete:()=>{

/* Walk */

gsap.to(yash,{

x:60,

duration:1,

ease:"power2.inOut",

onComplete:()=>{

/* Hug */

gsap.to(yash,{

x:35,

duration:.4

});

gsap.to(sejal,{

x:-35,

duration:.4

});

/* Hearts */

gsap.fromTo(hearts,{

scale:0,

opacity:0

},{

scale:1.4,

opacity:1,

duration:.8,

repeat:3,

yoyo:true

});

/* Kiss */

setTimeout(()=>{

gsap.to(yash,{

rotation:-12,

duration:.35,

yoyo:true,

repeat:1

});

},1200);

}

});

}

});

}

const sceneNext=document.getElementById("sceneNext");

sceneNext.addEventListener("click",()=>{

showScreen("questionScreen");

questionAnimation();

});

/* =========================
   QUESTION
========================= */

function questionAnimation(){

gsap.from(".questionCard",{

opacity:0,

y:60,

duration:.8

});

}

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

function moveNoButton(){

const x=(Math.random()*240)-120;
const y=(Math.random()*160)-80;

gsap.to(noBtn,{

x:x,

y:y,

duration:.35,

ease:"power2.out"

});

}

noBtn.addEventListener("mouseenter",moveNoButton);
noBtn.addEventListener("click",moveNoButton);

yesBtn.addEventListener("click",()=>{

confetti({

particleCount:180,

spread:120,

origin:{y:.65}

});

showScreen("letterScreen");

gsap.from(".letterCard",{

opacity:0,

y:60,

duration:1,

ease:"power3.out"

});

});

const letterNext=document.getElementById("letterNext");

letterNext.addEventListener("click",()=>{

showScreen("fingerprintScreen");

});
/* =========================
   FINGERPRINT SCANNER
========================= */

const fingerprint=document.getElementById("fingerprint");
const fingerProgress=document.getElementById("fingerProgress");
const holdText=document.getElementById("holdText");

let holdInterval;
let holdValue=0;

function startScan(){

holdValue=0;

fingerProgress.style.height="0%";

holdText.innerHTML="Scanning...";

holdInterval=setInterval(()=>{

holdValue+=2;

fingerProgress.style.height=holdValue+"%";

if(holdValue>=100){

clearInterval(holdInterval);

holdText.innerHTML="Fingerprint Verified ✅";

confetti({

particleCount:220,

spread:140,

origin:{y:.7}

});

setTimeout(()=>{

showScreen("certificateScreen");

showCertificate();

},1200);

}

},60);

}

function stopScan(){

clearInterval(holdInterval);

if(holdValue<100){

holdValue=0;

fingerProgress.style.height="0%";

holdText.innerHTML="Touch & Hold for 3 seconds";

}

}

fingerprint.addEventListener("mousedown",startScan);
fingerprint.addEventListener("mouseup",stopScan);
fingerprint.addEventListener("mouseleave",stopScan);

fingerprint.addEventListener("touchstart",(e)=>{

e.preventDefault();

startScan();

});

fingerprint.addEventListener("touchend",stopScan);

/* =========================
   CERTIFICATE
========================= */

function showCertificate(){

gsap.from(".certificate",{

opacity:0,

scale:.82,

duration:1,

ease:"back.out(1.4)"

});

gsap.from(".stamp",{

scale:5,

rotation:-40,

opacity:0,

duration:.8,

delay:.7,

ease:"bounce.out"

});

}

const finishBtn=document.getElementById("finishBtn");

finishBtn.addEventListener("click",()=>{

showScreen("finalScreen");

grandFinale();

});

/* =========================
   GRAND FINALE
========================= */

function grandFinale(){

confetti({

particleCount:450,

spread:360,

origin:{x:.5,y:.5}

});

confetti({

particleCount:220,

angle:60,

spread:90,

origin:{x:0}

});

confetti({

particleCount:220,

angle:120,

spread:90,

origin:{x:1}

});

gsap.from(".finalCard",{

opacity:0,

scale:.85,

duration:1,

ease:"power3.out"

});

toast("Friendship Certified Forever 💙");

}
/* =========================
   MUSIC
========================= */

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

toast("Music On 🎵");

}else{

music.pause();

musicBtn.innerHTML="🎵";

toast("Music Off");

}

});

/* =========================
   FLOATING ITEMS
========================= */

function createFloating(className,emoji,size,min,max){

const item=document.createElement("div");

item.className=className;

item.innerHTML=emoji;

item.style.left=Math.random()*100+"vw";

item.style.fontSize=size+"px";

item.style.animationDuration=
(min+Math.random()*max)+"s";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},12000);

}

setInterval(()=>{

createFloating(

"heart",

Math.random()>.5?"💙":"🤍",

16+Math.random()*18,

7,

5

);

},700);

setInterval(()=>{

createFloating(

"sparkle",

"✨",

12+Math.random()*12,

8,

6

);

},900);

setInterval(()=>{

createFloating(

"star",

"⭐",

12+Math.random()*10,

9,

6

);

},1500);

/* =========================
   TOAST
========================= */

const toastBox=document.getElementById("toast");

function toast(message){

toastBox.innerHTML=message;

toastBox.style.opacity="1";

setTimeout(()=>{

toastBox.style.opacity="0";

},2200);

}

/* =========================
   FIREWORKS
========================= */

function fireworkBurst(){

confetti({

particleCount:140,

spread:90,

origin:{
x:Math.random(),
y:Math.random()*.6
}

});

}

function launchFireworks(){

let count=0;

const show=setInterval(()=>{

fireworkBurst();

count++;

if(count>=8){

clearInterval(show);

}

},700);

}

/* =========================
   FINAL SCREEN
========================= */

const finalScreen=document.getElementById("finalScreen");

const observer=new MutationObserver(()=>{

if(finalScreen.classList.contains("active")){

launchFireworks();

}

});

observer.observe(finalScreen,{

attributes:true,

attributeFilter:["class"]

});

/* =========================
   END
========================= */

console.log("💙 Friendship Website Loaded Successfully!");
