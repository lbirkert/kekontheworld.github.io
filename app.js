let subtitlec = 0;

const subtitles = [
    "Create", "Connect", "Develop", "Inspire"
];

function sleep(t) {
    return new Promise(r=>setTimeout(r, t));
}

window.addEventListener("DOMContentLoaded", async function () {
    const subtitle = document.querySelector(".logo>.wrapper>.subtitle");

    console.log("KEKW");
    const timeline = gsap.timeline();
    timeline.to(".main", {opacity: 1, ease: "power3.out", duration: 1});
    timeline.from(".inner", {opacity: 0, ease: "power3.out", duration: 0.5}, "<10%");
    timeline.from(".links", {height: 0, duration: 0.25, ease: "power3.out"}, "<10%");
    timeline.from(".logo", {opacity: 0, x: 50, duration: 0.75, ease: "power3.out"}, "<50%");
    timeline.from(".logo>.wrapper>.subtitle", {y: -20, duration: 0.25, opacity: 0, repeat: 0});

    setInterval(async function() {
        gsap.to(".logo>.wrapper>.subtitle", {x: 50, duration: 0.25, opacity: 0, repeat: 0});
        await sleep(500);
        subtitle.innerText = subtitles[subtitlec];
        subtitlec = (subtitlec+1)%subtitles.length;
        gsap.to(".logo>.wrapper>.subtitle", {x: 0, duration: 0.25, opacity: 1, repeat: 0});
    }, 3000);
});
