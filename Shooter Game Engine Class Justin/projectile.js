/*
 Warning you cannot delete an object in javascript
 Therefore you must be careful how many objects are created
 The destroy function merely prevents additional calculations
 from taking place to prevent lag.
 */

class Projectile {
	constructor(x,y,canvasX,canvasY)
	{
		this.canvasX = canvasX;
		this.canvasY = canvasY;
		this.length = 10;
		this.height = 10;
		this.x = x;
		this.y = y;
		this.speed = 10;
		this.projectileImage = null;
		this.destroyed = -1;
	}

	setProjectileImage(img,l,h)
	{
		this.projectileImage = img;
		this.length = l;
		this.height = h;
	}

	setXY(x,y)
	{
		this.x = x;
		this.y = y;
		this.destroyed = 1;
	}

	getX()
	{
		if (this.projectileImage == null)
		{
			return this.x;
		}
		else {
			return this.x+this.length/2;
		}
	}

	getY()
	{
		if (this.projectileImage == null)
		{
			return this.y;
		}
		else {
			return this.y+this.height/2;
		}
	}

	getRadius()
	{
		return length;
	}

	getLength()
	{
		return this.length;
	}

	getHeight()
	{
		return this.height;
	}

	drawProjectile()
	{
		if (this.projectileImage == null)
		{
			ellipse(this.x,this.y,this.length,this.height);
		}
		else
		{
			image(this.projectileImage,this.x-this.length/2,this.y-this.height/2);
		}
	}

	fireProjectile(direction)
	{
		if (direction == "up")
		{
			this.y -= this.speed;
		}
		else if (direction == "down")
		{
			this.y += this.speed;
		}
		if (direction == "left")
		{
			this.x -= this.speed;
		}
		else if (direction == "right")
		{
			this.x += this.speed;
		}


		if (this.x > this.canvasX+this.length)
		{
			this.destroyProjectile();
		}
		if (this.x < 0-this.length)
		{
			this.destroyProjectile();
		}
		if (this.y < 0-this.height)
		{
			this.destroyProjectile();
		}
		if (this.y > this.canvasY+this.height)
		{
			this.destroyProjectile();
		}
	}

	destroyProjectile()
	{
		console.log("projectile destroyed");
		this.x = -1000;
		this.y = -1000;
		this.iamge = null;
		this.destroyed = -1;
	}

	isProjectileDestroyed()
	{
		return this.destroyed;
	}

}
