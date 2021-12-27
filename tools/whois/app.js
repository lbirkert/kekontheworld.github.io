let subtitlec = 0;

const subtitles = [
    "Search", "Find", "DNS", "Explore"
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

    const domain = document.getElementById("domain");
    const form = document.getElementById("form");
    const loader = document.querySelector(".loader");
    const result = document.querySelector(".result");
    const back = document.getElementById("back");
    form.addEventListener("submit", async function(e) {
        form.style = "display: none;";
        loader.style = "";

        e.preventDefault();

        console.log(domain.value);

        let results = [];

        const records = {1: "A", 28: "AAAA", 257: "CAA", 5: "CNAME", 48: "DNSKEY", 43: "DS", 65: "HTTPS", 15: "MX", 35: "NAPTR", 
        2: "NS", 12: "PTR", 99: "SPF", 33: "SRV", 44: "SSHFP", 52: "TLSA", 16: "TXT"};

        for(let record of Object.values(records)) {
            try {
                let result = await getRecord(domain.value, record);
                if(result) results = results.concat(result);
            } catch(e) {}
        }

        loader.style = "display: none;";
        
        result.innerHTML = "";

        for(let record of results) {
            let recordEl = document.createElement("div");
            recordEl.className = "record";

            let typeEl = document.createElement("h2");
            typeEl.innerText = records[record.type];

            let ttlEl = document.createElement("p");
            ttlEl.className = "ttl";
            ttlEl.innerText = record.TTL;

            let dataEl = document.createElement("textarea");
            dataEl.spellcheck = false;
            dataEl.className = "data";
            dataEl.innerText = record.data;

            let headEl = document.createElement("div");
            headEl.className = "head";
            headEl.appendChild(typeEl);
            headEl.appendChild(ttlEl);

            recordEl.appendChild(headEl);
            recordEl.appendChild(dataEl);
            result.appendChild(recordEl);
        }

        result.style = "";
        back.style = "";
    });

    back.addEventListener("click", function() {
        back.style = "display: none;";
        result.style = "display: none";
        loader.style = "display: none;";
        form.style = "";
    });
});

async function getRecord(domain, record) {
    let params = new URLSearchParams();
    params.set("name", domain);
    params.set("type", record);
    const baseapi = "https://dns.google/resolve";

    let j = await (await fetch(baseapi + "?" + params.toString())).json();
    if(j.Status != 0) return null;

    return j.Answer;
}
