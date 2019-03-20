var p1 = new Character(100,400);
var e1 = new Character(100,100);
var c1 = new Collision();
var projectileList = new Array(5);
var showProjectile;
var projectileCounter = [0, 0, 0];

function setup()
{
	createCanvas(500,500);
	showProjectile = false;
	for (var x = 0; x < 5; x++)
	{
		projectileList[x] = new Projectile(0,0,500,500)
	}
}

function draw()
{
	background(125,125,125);
	p1.drawCharacter();
	p1.moveCharacter();

	e1.drawCharacter();

	// if you pressed ' '
	// initiate firing of projectile
	if (showProjectile == true)
	{
		for (var x = 0; x < projectileList.length; x++)
		{
			if (projectileList[x].isProjectileDestroyed() > 0)
			{
				projectileList[x].drawProjectile();
				projectileList[x].fireProjectile("up");
				if (c1.collided(projectileList[x].getX(),projectileList[x].getY(),projectileList[x].getRadius(),
				    e1.getX(),e1.getY(),e1.getRadius()) == true)
				{
					console.log('explode!');
				}
			}
		}
	}
//	console.log(projectileList[0].isProjectileDestroyed()+' '+projectileList[1].isProjectileDestroyed());
}


function keyPressed()
{
	p1.charKeyPressed()
	if (key == ' ')
	{
		// Record which projectiles are currently being fired
		// this is to help limit the number of projectiles to 3 (present)
		for (var x = 0; x< projectileList.length; x++)
		{
			if (projectileList[x].isProjectileDestroyed() == -1)
			{
				projectileCounter[x] = 0;
			}
		}


		for (var x = 0; x< projectileList.length; x++)
		{
			// if projectile is destroyed then we may fire another projectile
			if (projectileList[x].isProjectileDestroyed() == -1)
			{
				showProjectile = true;
				projectileList[x].setXY(p1.getX(),p1.getY());
				projectileCounter[x] = 1;
				break;
			}
		}

	}
}

function keyReleased()
{
	p1.charKeyReleased()
	if (key == ' ')
	{

	}
}
