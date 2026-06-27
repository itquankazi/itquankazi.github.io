const bootText = document.getElementById("boot-text");
const boot = document.getElementById("boot");
const tree = document.getElementById("tree");
const cursor = document.querySelector(".cursor");

const frames = [
    "[□□□□□□□□□□] 0%",
    "[■■□□□□□□□□] 20%",
    "[■■■■□□□□□□] 40%",
    "[■■■■■■□□□□] 60%",
    "[■■■■■■■■□□] 80%",
    "[■■■■■■■■■■] 100%"
];

let i = 0;

bootText.textContent = "Loading portfolio...\n\n";

function animateBar(){

    if(i < frames.length){

        bootText.textContent =
            "Loading portfolio...\n\n" +
            frames[i];

        i++;

        setTimeout(animateBar, 120);

    }else{

        bootText.textContent =
            "Loading portfolio...\n\n" +
            "[■■■■■■■■■■] 100%\n\nDone.";

        setTimeout(() => {

            boot.style.display = "none";
            tree.classList.add("show");
            cursor.style.display = "inline";

        },250);

    }

}

window.onload = animateBar;