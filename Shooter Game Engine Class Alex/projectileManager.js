/*
 Warning you cannot delete an object in javascript
 Therefore you must be careful how many objects are created
 The destroy function merely prevents additional calculations
 from taking place to prevent lag.
 */

class ProjectileManager {
	constructor(maxNumberOfProjectiles)
	{
		this.showProjectile = false;
		this.maxNumberOfProjectiles = maxNumberOfProjectiles;
		this.projectileList = new Array(maxNumberOfProjectiles);
		this.projectileCounter = new Array(maxNumberOfProjectiles);
		for (var x = 0; x < maxNumberOfProjectiles; x++)
		{
			this.projectileList[x] = new Projectile(0,0,500,500);
			this.projectileCounter[x] = 0;
		}

	}

	setProjectileImage(img,l,h)
	{
		for (var x = 0; x < this.maxNumberOfProjectiles; x++)
		{
			this.projectileList[x].setProjectileImage(img,l,h);
		}
	}

	manageProjectile(enemy)
	{
		if (this.showProjectile == true)
		{
			for (var x = 0; x < this.maxNumberOfProjectiles; x++)
			{
				if (this.projectileList[x].isProjectileDestroyed() > 0)
				{
					this.projectileList[x].drawProjectile();
					this.projectileList[x].fireProjectile("up");
				}
			}
		}
		//	console.log(projectileList[0].isProjectileDestroyed()+' '+projectileList[1].isProjectileDestroyed());
	}

	hasCollided(enemy)
	{

//		console.log(enemy.isAlive());

		if (this.showProjectile == true)
		{
			for (var x = 0; x < this.maxNumberOfProjectiles; x++)
			{
				if (this.projectileList[x].isProjectileDestroyed() > 0)
				{
					if (enemy.isAlive() == 1 &&
					    c1.collided(this.projectileList[x].getX(),this.projectileList[x].getY(),this.projectileList[x].getRadius(),
							enemy.getX(),enemy.getY(),enemy.getRadius()) == true)
					{
						this.projectileList[x].destroyProjectile();
						console.log('explode!');
						return true;
					}
				}
			}
		}
		return false;
	}

	myKeyPressed(player)
	{
		if (key == ' ')
		{
			// Record which projectiles are currently being fired
			// this is to help limit the number of projectiles to 3 (present)
			for (var x = 0; x< this.projectileList.length; x++)
			{
				if (this.projectileList[x].isProjectileDestroyed() == -1)
				{
					this.projectileCounter[x] = 0;
				}
			}


			for (var x = 0; x< this.projectileList.length; x++)
			{
				// if projectile is destroyed then we may fire another projectile
				if (this.projectileList[x].isProjectileDestroyed() == -1)
				{
					this.showProjectile = true;
					this.projectileList[x].setXY(player.getX(),player.getY());
					this.projectileCounter[x] = 1;
					break;
				}
			}

		}
	}

	myKeyReleased()
	{
		if (key == ' ')
		{

		}
	}

}
