var animation = new Array(6);

var enemies = new Array(4);
var p1 = new Character(100,400);
var e1 = new Character(100,100);
var c1 = new Collision();
var pm1 = new ProjectileManager(3);

function setup()
{
	createCanvas(500,500);


//	p1.setSpeedV(5);

	setupDeathAnimation();

	e1.birthCharacter();
	e1.setSpeedV(1);
	e1.setDeathAnimation(animation);

	for (var i = 0; i < enemies.length; i++)
	{
		enemies[i] = new Character(100+100*i,40);
		enemies[i].birthCharacter();
		enemies[i].setSpeedV(1);
		enemies[i].setDeathAnimation(animation);
	}


}

function setupDeathAnimation()
{
	animation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	animation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	animation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	animation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	animation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	animation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');


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

	for (var i = 0; i < enemies.length; i++)
	{
		// draw enemy Character
		if (enemies[i].isAlive() != -1)
		{
			// draw enemy Character
			// automatically move enemy down
			enemies[i].drawCharacter();
			enemies[i].autoMoveDown();

			// kill character if it is off screen
			if (enemies[i].getX() > 500)
			{
				enemies[i].killCharacter();
			}
		}

		if (pm1.hasCollided(enemies[i]) == true)
		{
			enemies[i].killCharacter();
		}

	}

	pm1.manageProjectile();



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
