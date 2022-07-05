var randNum1 = Math.floor((Math.random() * 6) + 1);

var randNum2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", `images/dice${randNum1}.png`);

document.querySelector(".img2").setAttribute("src", `images/dice${randNum2}.png`);

document.querySelector("h1").innerText = "Refresh to play";

if (randNum1 > randNum2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!!";
}
else if (randNum1 < randNum2){
    document.querySelector("h1").innerText = "Player 2 Wins!! 🚩";
}
else if (randNum1 === randNum2) {
    document.querySelector("h1").innerText = "Its a Draw!";
}