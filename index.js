var diceImages =["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var randomNumber1 =Math.random();
randomNumber1 = Math.floor(randomNumber1 *6)+1;

var diceImage = document.querySelector('p.img1');
diceImage.setAttribute("src", diceImages[randomNumber1 -1]); 
