var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var heading = document.querySelector("h1");
// setTimeout(function () {
    let rand1 = Math.floor((Math.random() * 6)+1);
    let newSrc1 = "images/dice"+rand1+".png";
    dice1.setAttribute("src", newSrc1);
    let rand2 = Math.floor((Math.random() * 6)+1);
    let newSrc2 = "images/dice"+rand2+".png";
    dice2.setAttribute("src", newSrc2);
    if(rand1 > rand2)
    heading.textContent = "Player 1 wins !";
    else if(rand2 > rand1)
    heading.textContent = "Player 2 wins !";
    else
    heading.textContent = "It's a draw chaddi baddi yarr!";
// }, 400);
