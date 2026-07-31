const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤" : "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

function createPetal() {
    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 14000);
}

setInterval(createHeart, 500);
setInterval(createPetal, 900);

gsap.from(".card", {
    y: 80,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out"
});

gsap.from("#title", {
    delay: 0.3,
    opacity: 0,
    y: 30,
    duration: 1
});

gsap.from("#subtitle", {
    delay: 0.6,
    opacity: 0,
    y: 20,
    duration: 1
});

gsap.from("#message", {
    delay: 0.9,
    opacity: 0,
    y: 20,
    duration: 1
});

gsap.from("#openBtn", {
    delay: 1.2,
    scale: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
});

const button = document.getElementById("openBtn");

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.08,
        duration: 0.25
    });
});

button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.25
    });
});

button.addEventListener("click", () => {

    gsap.to(".card",{
        scale:.96,
        duration:.15,
        yoyo:true,
        repeat:1
    });

});
