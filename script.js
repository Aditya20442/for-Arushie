/* ======================================================
   FRIENDSHIP DAY V2
   SCRIPT.JS
   PART 1 / 4
====================================================== */

/* ========================= */
/* SCREEN HANDLER */
/* ========================= */

const screens = document.querySelectorAll(".screen");

function showScreen(id){

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo(0,0);

}

/* ========================= */
/* LOADING SCREEN */
/* ========================= */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showScreen("envelopeScreen");

    },3000);

});

/* ========================= */
/* ENVELOPE */
/* ========================= */

document.getElementById("openEnvelope").onclick=()=>{

    gsap.fromTo(

        ".envelope",

        {
            scale:0.8,
            rotation:-5
        },

        {
            scale:1.15,
            rotation:5,
            duration:0.45,
            yoyo:true,
            repeat:1
        }

    );

    setTimeout(()=>{

        showScreen("welcomeScreen");

    },900);

};

/* ========================= */
/* WELCOME */
/* ========================= */

document.getElementById("welcomeNext").onclick=()=>{

    showScreen("introQuestion");

};

/* ========================= */
/* FIRST QUESTION */
/* ========================= */

document.getElementById("askYes").onclick=()=>{

    showScreen("smileScreen");

};

document.getElementById("askAlso").onclick=()=>{

    showScreen("smileScreen");

};

/* ========================= */
/* SMILE QUESTION */
/* ========================= */

document.getElementById("smileYes").onclick=()=>{

    openStory();

};

document.getElementById("smileNo").onclick=()=>{

    alert("😂 I knew it!\nSmile first... then continue ❤️");

    openStory();

};

/* ========================= */
/* TYPEWRITER */
/* ========================= */

const storyText=`Friendship isn't about talking every day.

It's about knowing someone is always there.

Thank you for every laugh...

Every random conversation...

Every silly moment...

And simply for being YOU.

Happy Friendship Day Sejal ❤️`;

function openStory(){

    showScreen("storyScreen");

    typeWriter(

        storyText,

        document.getElementById("typewriterText")

    );

}

function typeWriter(text,element){

    element.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },35);

}

/* ========================= */
/* STORY NEXT */
/* ========================= */

document.getElementById("storyNext").onclick=()=>{

    showScreen("animationScreen");

};
/* ======================================================
   FRIENDSHIP DAY V2
   SCRIPT.JS
   PART 2 / 4
====================================================== */

/* ========================= */
/* CUTE ANIMATION */
/* ========================= */

const animationText=document.getElementById("animationText");

const animationLines=[

"👋 First... they wave at each other...",

"🌸 Then Yash gives Sejal a flower...",

"🥹 She smiles happily...",

"🤗 They share a warm hug...",

"💙 Friendship grows stronger forever."

];

let animationIndex=0;

function startAnimationStory(){

animationText.innerHTML=animationLines[0];

const timer=setInterval(()=>{

animationIndex++;

if(animationIndex>=animationLines.length){

clearInterval(timer);

return;

}

animationText.innerHTML=animationLines[animationIndex];

},2200);

}

startAnimationStory();

/* ========================= */
/* NEXT */
/* ========================= */

document.getElementById("animationNext").onclick=()=>{

showScreen("bestFriendScreen");

};

/* ========================= */
/* BEST FRIEND */
/* ========================= */

const noBtn=document.getElementById("noForever");

document.getElementById("yesForever").onclick=()=>{

showScreen("letterScreen");

};

function moveNoButton(){

const x=Math.random()*260-130;

const y=Math.random()*180-90;

noBtn.style.transform=`translate(${x}px,${y}px)`;

}

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("click",moveNoButton);

/* ========================= */
/* LETTER */
/* ========================= */

document.getElementById("letterNext").onclick=()=>{

showScreen("appreciationScreen");

};

/* ========================= */
/* APPRECIATION */
/* ========================= */

document.getElementById("appLot").onclick=()=>{

showScreen("fingerprintScreen");

};

document.getElementById("appLittle").onclick=()=>{

alert("😂 Wrong answer!\nIt's much more than that ❤️");

showScreen("fingerprintScreen");

};
/* ======================================================
   FRIENDSHIP DAY V2
   SCRIPT.JS
   PART 3 / 4
====================================================== */

/* ========================= */
/* FINGERPRINT SCANNER */
/* ========================= */

const fingerRing=document.getElementById("fingerRing");
const scanBar=document.getElementById("scanProgress");
const scanText=document.getElementById("scanText");

let scanTimer=null;
let scanning=false;

function startScan(){

if(scanning) return;

scanning=true;

scanBar.style.height="100%";

scanText.innerHTML="Scanning... 🔍";

scanTimer=setTimeout(()=>{

scanText.innerHTML="✅ Friendship Verified";

showToast("Friendship Accepted ❤️");

setTimeout(()=>{

showScreen("certificateLoading");

startCertificateLoading();

},1000);

},3000);

}

function stopScan(){

if(!scanning) return;

clearTimeout(scanTimer);

scanBar.style.height="0";

scanText.innerHTML="Touch & Hold for 3 Seconds";

scanning=false;

}

fingerRing.addEventListener("mousedown",startScan);
fingerRing.addEventListener("touchstart",startScan);

fingerRing.addEventListener("mouseup",stopScan);
fingerRing.addEventListener("mouseleave",stopScan);
fingerRing.addEventListener("touchend",stopScan);

/* ========================= */
/* CERTIFICATE LOADING */
/* ========================= */

function startCertificateLoading(){

const bar=document.getElementById("certificateBar");

const checks=document.querySelectorAll(".checkList p");

checks[0].innerHTML="⏳ Checking Friendship...";
checks[1].innerHTML="⏳ Checking Trust...";
checks[2].innerHTML="⏳ Loading Memories...";
checks[3].innerHTML="⏳ Finalizing...";

let width=0;

bar.style.width="0%";

const loader=setInterval(()=>{

width++;

bar.style.width=width+"%";

if(width===25){

checks[0].innerHTML="✅ Friendship Verified";

}

if(width===50){

checks[1].innerHTML="✅ Trust Verified";

}

if(width===75){

checks[2].innerHTML="✅ Memories Loaded";

}

if(width>=100){

clearInterval(loader);

checks[3].innerHTML="✅ Certificate Ready";

setTimeout(()=>{

showScreen("certificateScreen");

},700);

}

},35);

}

/* ========================= */
/* CERTIFICATE */
/* ========================= */

document.getElementById("certificateNext").onclick=()=>{

showEnding();

};
/* ======================================================
   FRIENDSHIP DAY V2
   SCRIPT.JS
   PART 4 / 4
====================================================== */

/* ========================= */
/* ENDING MESSAGE */
/* ========================= */

const endingMessage=`Dear Sejal,

Thank you for being such an amazing friend.

Some people come into our lives
and quietly make them brighter.

You're one of those people.

I hope we keep laughing,
sharing reels,
making memories,
and annoying each other
for many more years.

Happy Friendship Day ❤️

— Yash`;

function showEnding(){

showScreen("endingScreen");

typeWriter(

endingMessage,

document.getElementById("endingTypewriter")

);

}

/* ========================= */
/* GRAND FINALE */
/* ========================= */

document.getElementById("celebrateBtn").onclick=()=>{

showScreen("finalScreen");

launchConfetti();

showToast("Happy Friendship Day ❤️");

};

/* ========================= */
/* CONFETTI */
/* ========================= */

function launchConfetti(){

confetti({

particleCount:220,

spread:120,

origin:{y:0.6}

});

setTimeout(()=>{

confetti({

particleCount:180,

angle:60,

spread:90,

origin:{x:0}

});

confetti({

particleCount:180,

angle:120,

spread:90,

origin:{x:1}

});

},500);

}

/* ========================= */
/* MUSIC */
/* ========================= */

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};

/* ========================= */
/* TOAST */
/* ========================= */

function showToast(message){

const toast=document.getElementById("toast");

toast.innerHTML=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/* ========================= */
/* GSAP ANIMATIONS */
/* ========================= */

gsap.from(

".glass",

{

opacity:0,

y:40,

duration:1,

ease:"power2.out"

}

);

gsap.to(

"#musicBtn",

{

y:-8,

duration:1.2,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

}

);

/* ========================= */
/* PREVENT IMAGE DRAG */
/* ========================= */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

/* ========================= */
/* END OF SCRIPT */
/* ========================= */
