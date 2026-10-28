let heading = [
    "Complete Auth Flow",
    "Complete Auth Flow 2",
    "Complete Auth Flow 3"
];

let text = [
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."
];

let cur = 0;

function showSlide() {

    let headingElement = document.getElementById("heading");
    let textElement = document.getElementById("text");

    headingElement.classList.add("slide-out");
    textElement.classList.add("slide-out");

    setTimeout(function () {

        headingElement.innerHTML = heading[cur];
        textElement.innerHTML = text[cur];

        headingElement.classList.remove("slide-out");
        textElement.classList.remove("slide-out");

        headingElement.classList.add("slide-in");
        textElement.classList.add("slide-in");

        setTimeout(function () {
            headingElement.classList.remove("slide-in");
            textElement.classList.remove("slide-in");
        }, 500);

    }, 600);

    if (cur == 0) {
        document.getElementById("dot1").style.backgroundColor = "rgb(24,226,226)";
        document.getElementById("dot2").style.backgroundColor = "grey";
        document.getElementById("dot3").style.backgroundColor = "grey";
    }
    else if (cur == 1) {
        document.getElementById("dot1").style.backgroundColor = "grey";
        document.getElementById("dot2").style.backgroundColor = "rgb(24,226,226)";
        document.getElementById("dot3").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("dot1").style.backgroundColor = "grey";
        document.getElementById("dot2").style.backgroundColor = "grey";
        document.getElementById("dot3").style.backgroundColor = "rgb(24,226,226)";
    }
}

showSlide();

setInterval(function () {

    cur = cur + 1;
    if(cur>2){
        cur=0;
    }

    showSlide();

}, 4000);