var score;
var playerImage;
var enemySet1;
var enemySet2;
var enemySet3;
var p1;
var c1 = new Collision();
var pm1 = new ProjectileManager(5);
var healthBar;

function setup()
{
	createCanvas(500,500);

	// setup Score
	score = new Score();
	score.setScoreXY(440,50);

	// setup player
	p1 = new Character(100,400); // player starting x,y
	playerImage = loadImage('https://kamingchang.github.io/ct/assets/Ship.png');
	p1.setCharacterImage(playerImage,12,20);


	// set projectile image
	var projectileImage = loadImage('https://kamingchang.github.io/ct/assets/Missile.png');
	pm1.setProjectileImage(projectileImage,4,19);

	// setup health bar
	healthBar = new HealthBar(10,10); // starting health and maximum health
	healthBar.setHealthBarXY(290,10);

	var enemySet1Photos = new Array(5);
	enemySet1Photos[0] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/one.png');
	enemySet1Photos[1] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/two.png');
	enemySet1Photos[2] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/three.png');
	enemySet1Photos[3] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/four.png');
	enemySet1Photos[4] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/five.png');
	enemySet1Photos[5] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/question1.png');


	// setup explosionAnimation
	var deathAnimation = new Array(6);
	deathAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	deathAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	deathAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	deathAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	deathAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	deathAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');


	// set 4 enemies, no images, answer is 1
	enemySet1 = new EnemyManager(4,enemySet1Photos,true,1);  // number of enemies, photos, random, answer
	enemySet1.setQuestion(enemySet1Photos[5],10,0);  // photo, x, y
	enemySet1.setEnemySpeed(1);
	enemySet1.setLengthHeight(63,40);
	enemySet1.setEnemySpacing(60);
	enemySet1.setKillOutOfScreen(400);
	enemySet1.setDeathAnimation(deathAnimation);
	enemySet1.startEnemies();


	var enemySet2Photos = new Array(5);
	enemySet2Photos[0] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/twentythree.png');
	enemySet2Photos[1] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fourtyfive.png');
	enemySet2Photos[2] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fiftyfour.png');
	enemySet2Photos[3] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/fiftynine.png');
	enemySet2Photos[4] = loadImage('https://bleungwpg.github.io/resourcehosting/mathgame/question2.png');


	// set 5 enemies, no images, answer is 3
	enemySet2 = new EnemyManager(4,enemySet2Photos,true,1);
	enemySet2.setQuestion(enemySet2Photos[4],0,0);  // photo, x, y
	enemySet2.setKillOutOfScreen(400);
	enemySet2.setLengthHeight(63,40);
	enemySet2.setEnemySpacing(75);
	enemySet2.setEnemySpeed(1);

	// set 6 enemies, no images, answer is 5
	enemySet3 = new EnemyManager(6,null,false,1);
	enemySet3.setKillOutOfScreen(400);
	enemySet3.setEnemySpeed(1.5);



}

function draw()
{
	background(125,125,125);

	if (p1.isAlive() == true)
	{
		// draw player character
		// wait to move player character based on controls
		p1.drawCharacter();
		p1.moveCharacter();
	}

	// --------------------------------- MODIFY CODE START ----------------------------------
	// ------------------ setup logic to transition between questions -----------------------


	// START QUESTION 1 --------------------------------------------------------
	if (enemySet1.isQuestionFinished() == false)
	{
		// show the question
		enemySet1.drawQuestion();


		var gameState = enemySet1.drawEnemies(pm1);
//console.log(gameState);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(1);
//			enemySet2.startEnemies();
			enemySet1.endQuestion();
			enemySet2.startEnemies();

		}
		else if (gameState == 1)
		{
			// if answer has reach the base
			console.log('answer has reached base, add score');
			score.addScore(10);

		}
		if (enemySet1.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
		}
	}
	// END QUESTION 1 ----------------------------------------------------------


	// START QUESTION 2 --------------------------------------------------------
	if (enemySet2.isQuestionFinished() == false)
	{
		// show the question
		enemySet2.drawQuestion();


		var gameState = enemySet2.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(1);
			enemySet3.startEnemies();
		}
		else if (gameState == 1)
		{
			// if answer has reach the base
			console.log('answer has reached base, add score');
			enemySet3.startEnemies();
		}
		if (enemySet2.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet3.startEnemies();
		}
	}
	// END QUESTION 2 ----------------------------------------------------------




	if (enemySet3.isQuestionFinished() == false)
	{
		enemySet3.drawEnemies(pm1);
		if (enemySet3.isAnswerAlive() == false)
		{
			// add things like sound effects / increase or decrease score
			console.log('answer has been shot!');
			// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
			window.open("mainmenu/mainmenu.html","_self");
		}
	}

	// --------------------------------- MODIFY CODE END ----------------------------------



	// manage projectiles - do not touch
	pm1.manageProjectile();


	// show health bar
	healthBar.showHealthBar();

	// show Score
	score.showScore();

}


function keyPressed()
{
	p1.charKeyPressed();
	pm1.myKeyPressed(p1);
}

function keyReleased()
{
	p1.charKeyReleased();
	pm1.myKeyReleased();
}
