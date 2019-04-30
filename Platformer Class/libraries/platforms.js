class Platforms {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.length = 50;
		this.height = 50;

		this.image = null;

		this.exists = true;
		this.collidabale = true;

		this.moving = null;

		this.deathAnimation = null;

		this.animationBegin = 0;

		// behavior
		// 0 - means you cannot go through all sides
		// 1 - means you can jump through the bottom
		this.behavior = 0;
	}

	setPlatformBehavior(b)
	{
		this.behavior = b;
	}

	getPlatformBehavior()
	{
		return this.behavior;
	}

	isCollidable()
	{
		return this.collidabale;
	}

	setXY(x,y)
	{
//		console.log('x: '+x+'      y: '+y);
		this.x = x;
		this.y = y;
	}

	getXMin()
	{
		return this.x;
	}

	getXMax()
	{
		return this.x+this.length;
	}

	getYMin()
	{
		return this.y;
	}

	getYMax()
	{
		return this.y+this.height;
	}


	getX()
	{
		return this.x;
	}

	getY()
	{
		return this.y;
	}

	setLH(l,h)
	{
		this.length = l;
		this.height = h;
	}

	setImage(image,l,h)
	{
		this.image = image;
		this.length = l;
		this.height = h;
	}

	setDeathAnimation(deathAnimation)
	{
		this.deathAnimation = new Animation(this.x,this.y,this.length,this.height,deathAnimation.length,deathAnimation);
	}

	platformExists()
	{
		return this.exists;
	}

	destroyPlatform()
	{
		if (this.deathAnimation != null)
		{
			this.animationBegin = -2;
			this.deathAnimation.startAnimation();
			this.collidabale = false;
		}
		else {
			this.exists = false;
			this.collidabale = false;
		}
	}

	drawPlatform()
	{
		if (this.exists)
		{
			if (this.image == null)
			{
				fill(200,200,200);
				rect(this.x,this.y,this.length,this.height);
			}
			else
			{
				if (this.animationBegin == 0) {
					image(this.image,this.x,this.y,this.length,this.height);
				}
				else if (this.animationBegin == -2)
				{
					if (this.deathAnimation != null)
					{
						if (this.deathAnimation.isAnimationFinished() == 1)
						{
							this.deathAnimation.drawAnimation();
						}
						else {
							this.exists = false;
							this.collidabale = false;
						}
					}
				}

			}

		}
	}
}
