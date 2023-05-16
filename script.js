const tails = document.getElementById("tails");
const tree = document.getElementById("tree");
let score = document.getElementById("score");
let isAllow = true;
let ground = document.getElementById("ground");
let clouds = document.getElementById("clouds");
let game = document.querySelector(".game");

function jump(e) {
    if (e.code === "Space") {
        if (tails.classList != "jump") {
            tails.classList.add("jump");
        }
        setTimeout(function() {
            tails.classList.remove("jump");
        }, 1000);
    }
}
document.addEventListener("keydown", jump, false);

let isAlive = setInterval(function() {
    let tailsTop = parseInt(window.getComputedStyle(tails).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    let sc = parseInt(score.textContent);

    if (treeLeft > 900) {
        isAllow = true;
    }

    if (treeLeft < 70 && treeLeft > 0 && tailsTop >= 330) {
        alert('Game Over! Your score: ' + sc);
        location.reload();
    } else if (treeLeft < -20 && isAllow) {
        isAllow = false;
        sc++;
        score.textContent = sc;

        if (sc === 10) {
            clouds.style.backgroundImage = "url(img/clouds2.png)"

            ground.style.backgroundImage = "url(img/ground.png)"

            ground.style.top = "-90px"

            tree.style.backgroundImage = "url(img/tree2.png)";

            score.style.color = "#906f9a";

            tails.style.backgroundImage = "url(img/tailsdoll.gif)";

             game.style.backgroundColor = "#240000";

        }
        if (sc === 11){
            tree.style.animation = "treeMove 1.8s infinite linear";
        }

        }
        if (sc === 20) {
            alert("You win!"); }


}, 15);


