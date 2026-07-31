/* ======================================================
   FRIENDSHIP DAY V3
   SCRIPT.JS
   PART 1 / 4
====================================================== */


/* ========================= */
/* SCREEN SYSTEM */
/* ========================= */


const screens=document.querySelectorAll(".screen");


function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});


document.getElementById(id).classList.add("active");

}



/* ========================= */
/* LOADING */
/* ========================= */


window.addEventListener("load",()=>{


setTimeout(()=>{


showScreen("envelopeScreen");


},3000);


});





/* ========================= */
/* ENVELOPE */
/* ========================= */


document
.getElementById("openEnvelope")
.onclick=()=>{


gsap.to(

"#envelope",

{

scale:1.15,

rotation:5,

duration:.4,

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


document
.getElementById("welcomeNext")
.onclick=()=>{


showScreen("questionScreen");


};





/* ========================= */
/* FIRST QUESTION */
/* ========================= */


document
.getElementById("questionYes")
.onclick=()=>{


showScreen("smileScreen");


};



document
.getElementById("questionAlso")
.onclick=()=>{


showScreen("smileScreen");


};





/* ========================= */
/* SMILE QUESTION */
/* ========================= */


document
.getElementById("smileYes")
.onclick=()=>{


openStory();


};



document
.getElementById("smileNo")
.onclick=()=>{


alert(
"😂 Smile first... then continue ❤️"
);


openStory();


};





/* ========================= */
/* STORY */
/* ========================= */


const storyMessage=

`Friendship is not about talking every second.

It is about knowing someone cares.

Thank you for every laugh,
every memory,
and every little moment.

Happy Friendship Day Arushie ❤️`;



function openStory(){


showScreen("storyScreen");


typeWriter(

storyMessage,

document.getElementById("storyText")

);


}



function typeWriter(text,element){


element.innerHTML="";


let i=0;


let timer=setInterval(()=>{


element.innerHTML+=text.charAt(i);


i++;


if(i>=text.length){


clearInterval(timer);


}


},40);


}




/* ========================= */
/* STORY NEXT */
/* ========================= */


document
.getElementById("storyNext")
.onclick=()=>{


showScreen("chatScreen");


}; 
/* ======================================================
   FRIENDSHIP DAY V3
   SCRIPT.JS
   PART 2 / 4
====================================================== */


/* ========================= */
/* CHAT */
/* ========================= */


document
.getElementById("chatNext")
.onclick=()=>{


showScreen("sceneScreen");


};





/* ========================= */
/* FRIENDSHIP SCENE */
/* ========================= */


const sceneText=document.getElementById("sceneText");


const sceneLines=[

"👋 First they wave at each other...",

"🌸 Then comes a little smile...",

"💖 A beautiful friendship moment begins...",

"🤗 And a forever memory is created..."

];


let sceneIndex=0;



function startScene(){


sceneText.innerHTML=sceneLines[0];


let sceneTimer=setInterval(()=>{


sceneIndex++;


if(sceneIndex>=sceneLines.length){


clearInterval(sceneTimer);


return;


}



sceneText.innerHTML=sceneLines[sceneIndex];


},2200);



}



startScene();





/* ========================= */
/* SCENE NEXT */
/* ========================= */


document
.getElementById("sceneNext")
.onclick=()=>{


showScreen("friendScreen");


};





/* ========================= */
/* BEST FRIEND QUESTION */
/* ========================= */


const noButton=document.getElementById("noBtn");



document
.getElementById("yesBtn")
.onclick=()=>{


showScreen("letterScreen");


};




function moveNoButton(){


const x=Math.random()*250-125;

const y=Math.random()*150-75;


noButton.style.transform=

`translate(${x}px,${y}px)`;

}



noButton.addEventListener(

"mouseenter",

moveNoButton

);



noButton.addEventListener(

"click",

moveNoButton

);





/* ========================= */
/* LETTER */
/* ========================= */


document
.getElementById("letterNext")
.onclick=()=>{


showScreen("appreciationScreen");


};





/* ========================= */
/* APPRECIATION */
/* ========================= */


document
.getElementById("appYes")
.onclick=()=>{


showScreen("fingerScreen");


};



document
.getElementById("appNo")
.onclick=()=>{


alert(

"😂 Wrong answer!\nIt is much more than that ❤️"

);


showScreen("fingerScreen");


};
/* ======================================================
   FRIENDSHIP DAY V3
   SCRIPT.JS
   PART 3 / 4
====================================================== */


/* ========================= */
/* FINGERPRINT SCANNER */
/* ========================= */


const scanner=document.getElementById("scanner");

const scanFill=document.getElementById("scanFill");

const scanStatus=document.getElementById("scanStatus");


let scanning=false;

let scanTimer;




function startScan(){


if(scanning) return;


scanning=true;


scanStatus.innerHTML="Scanning... 🔍";


scanFill.style.height="100%";



scanTimer=setTimeout(()=>{


scanStatus.innerHTML="✅ Friendship Verified";


showToast("Accepted with love ❤️");



setTimeout(()=>{


showScreen("certificateLoading");


startCertificate();


},1000);



},3000);



}




function stopScan(){


if(!scanning) return;


clearTimeout(scanTimer);


scanFill.style.height="0";


scanStatus.innerHTML="Waiting for fingerprint...";


scanning=false;


}




scanner.addEventListener(

"mousedown",

startScan

);


scanner.addEventListener(

"mouseup",

stopScan

);


scanner.addEventListener(

"mouseleave",

stopScan

);



scanner.addEventListener(

"touchstart",

startScan

);


scanner.addEventListener(

"touchend",

stopScan

);





/* ========================= */
/* CERTIFICATE CREATION */
/* ========================= */


function startCertificate(){



const progress=document.getElementById("progressFill");


const steps=[

document.getElementById("step1"),

document.getElementById("step2"),

document.getElementById("step3"),

document.getElementById("step4")

];



let width=0;



let timer=setInterval(()=>{



width++;



progress.style.width=width+"%";



if(width===25){


steps[0].innerHTML="✅ Friendship Checked";


}



if(width===50){


steps[1].innerHTML="✅ Memories Loaded";


}



if(width===75){


steps[2].innerHTML="✅ Trust Verified";


}



if(width>=100){


steps[3].innerHTML="✅ Certificate Ready";


clearInterval(timer);



setTimeout(()=>{


showScreen("certificateScreen");


},1000);



}



},35);



}





/* ========================= */
/* CERTIFICATE NEXT */
/* ========================= */


document
.getElementById("certificateNext")
.onclick=()=>{


showEnding();


};





/* ========================= */
/* ENDING TYPEWRITER */
/* ========================= */


const endingText=

`Dear Arushie,

Thank you for being such an amazing friend.

I hope we always keep laughing,
sharing memories,
and making each other smile.

Some friendships are truly special.

Happy Friendship Day ❤️

— Adii`;



function showEnding(){


showScreen("endingScreen");


typeWriter(

endingText,

document.getElementById("endingMessage")

);


};
/* ======================================================
   FRIENDSHIP DAY V3
   SCRIPT.JS
   PART 4 / 4
====================================================== */


/* ========================= */
/* FINAL CELEBRATION */
/* ========================= */


document
.getElementById("celebrateBtn")
.onclick=()=>{


showScreen("finalScreen");


launchConfetti();


showToast("Happy Friendship Day Arushie 💖");


};





/* ========================= */
/* CONFETTI */
/* ========================= */


function launchConfetti(){


confetti({

particleCount:220,

spread:130,

origin:{
y:.6
}

});



setTimeout(()=>{


confetti({

particleCount:150,

spread:100,

angle:60,

origin:{
x:0
}

});



confetti({

particleCount:150,

spread:100,

angle:120,

origin:{
x:1
}

});



},600);



}





/* ========================= */
/* MUSIC */
/* ========================= */


const music=document.getElementById("backgroundMusic");

const musicButton=document.getElementById("musicButton");


let musicPlaying=false;



musicButton.onclick=()=>{


if(!musicPlaying){


music.play();


musicButton.innerHTML="⏸️";


musicPlaying=true;



}

else{


music.pause();


musicButton.innerHTML="🎵";


musicPlaying=false;



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
/* FLOATING HEARTS */
/* ========================= */


function createFloatingItem(){


const container=document.getElementById("hearts");


const heart=document.createElement("div");


heart.className="floatItem";


heart.innerHTML="💖";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=

(5+Math.random()*5)+"s";



container.appendChild(heart);



setTimeout(()=>{


heart.remove();


},10000);



}



setInterval(

createFloatingItem,

700

);





/* ========================= */
/* SPARKLES */
/* ========================= */


function createSparkle(){


const container=document.getElementById("sparkles");


const sparkle=document.createElement("div");


sparkle.className="floatItem";


sparkle.innerHTML="✨";


sparkle.style.left=Math.random()*100+"%";


sparkle.style.animationDuration=

(4+Math.random()*4)+"s";



container.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();


},9000);



}



setInterval(

createSparkle,

1000

);





/* ========================= */
/* INITIAL ANIMATION */
/* ========================= */


gsap.from(

".card",

{

opacity:0,

y:40,

duration:1,

ease:"power2.out"

}

);



gsap.to(

"#musicButton",

{

y:-10,

duration:1.2,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

}

);





/* ======================================================
   SCRIPT END
====================================================== */
