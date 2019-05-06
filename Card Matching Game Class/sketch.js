var c1;
var c2;
var c3;
var c4;
var delayTimer;
var deck;
var flipAnimation;

function preload()
{
}


function setup()
{
	createCanvas(1000,600);

	var flipAnimation = new Array(5);
	flipAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	flipAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	flipAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	flipAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	flipAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	flipAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');



	var flippedCard = loadImage('https://bleungwpg.github.io/resourcehosting/cardGame/hiddenCard.png');
	var card1 = loadImage('https://bleungwpg.github.io/resourcehosting/cardGame/moon1.png');
	var card2 = loadImage('https://bleungwpg.github.io/resourcehosting/cardGame/orange1.png');
	var card3 = loadImage('https://bleungwpg.github.io/resourcehosting/cardGame/queen1.png');
	var card4 = loadImage('https://bleungwpg.github.io/resourcehosting/cardGame/rocket1.png');

	deck = new CardDeck(100,140,2,4,flippedCard,true); // length,height,maxrow,maxcol,flippedCard,random
	deck.setFlipAnimation(flipAnimation);

	deck.addCard(card1,0);
	deck.addCard(card1,0);
	deck.addCard(card2,1);
	deck.addCard(card2,1);
	deck.addCard(card3,2);
	deck.addCard(card3,2);
	deck.addCard(card4,3);
	deck.addCard(card4,3);


	// delay timer
	delayTimer = new Timer(0,0,0,0);
	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(5);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


}

function draw()
{
	background(0,0,0);

	// if the game is finished
	if (deck.showDeck() == 1)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("mainmenu/mainmenu.html","_self");
	}

	// everytime a card match has been found DO SOMETHING
	if (deck.checkMatch() >= 1)
	{
		console.log('match found');



		// initiate a delay timer when a question is answered
		delayTimer.startTimer();
		if (delayTimer.isTimerFinished() == true)
		{
			if (deck.checkMatch() == 1)
			{
				deck.checkMatch("reset");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			else if (deck.checkMatch() == 2)
			{
				deck.checkMatch("remove");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			delayTimer.resetTimer();
		}
	}

}
