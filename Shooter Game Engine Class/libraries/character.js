class Character {
	constructor(x,y)
	{
		this.length = 25;
		this.height = 25;
		this.x = x;
		this.y = y;
		this.charImage = null;
		this.speedV = 5;
		this.speedH = 5;
		this.upActive = false;
		this.downActive = false;
		this.leftActive = false;
		this.rightActive = false;

		// alive = 0 is dead but not finished death animation
		// alive = 1 is alive
		// alive = -1 is dead and completed death animation
		this.alive = 1;

		this.deathAnimationFrames = null;
		this.deathAnimation = null;
	}

	setDeathAnimation(deathAnimationFrames)
	{
		this.deathAnimationFrames = new Array(deathAnimationFrames.length);
		for (var i = 0; i < deathAnimationFrames.length; i++)
		{
			this.deathAnimationFrames[i] = deathAnimationFrames[i];
		}
		this.deathAnimation = new Animation(this.getX(),this.getY(),this.length,this.height,deathAnimationFrames.length,this.deathAnimationFrames);
		this.deathAnimation.setRepeatAnimation(false);
		this.deathAnimation.setAnimationSpeed(3);

	}

	setCharacterImage(img,length,height)
	{
		this.length = length;
		this.height = height;
		this.charImage = img;
	}

	setXY(x,y)
	{
		this.x = x;
		this.y = y;
	}

	setLengthHeight(l,h)
	{
		this.length = l;
		this.height = h;
	}

	setSpeedV(speed)
	{
		this.speedV = speed;
	}

	setSpeedH(speed)
	{
		this.speedH = speed;
	}

	getX()
	{
		if (this.charImage == null)
		{
			return this.x;
		}
		else {
			return this.x+this.length/2;
		}
	}

	getY()
	{
		if (this.charImage == null)
		{
			return this.y;
		}
		else {
			return this.y+this.height/2;
		}
	}

	getL()
	{
		return this.length;
	}

	getH()
	{
		return this.height;
	}

	getRadius()
	{
		return this.length/2;
	}

	autoMoveDown()
	{
		this.y += this.speedV;
	}

	autoMoveUp()
	{
		this.y -= this.speedV;
	}

	autoMoveRight()
	{
		this.x += this.speedH;
	}

	autoMoveLeft()
	{
		this.x -= this.speedH;
	}



	moveCharacter()
	{
		// upleft
		if (this.upActive == true && this.leftActive == true && this.downActive == false && this.rightActive == false)
		{
		  this.x -= this.speedH;
		  this.y -= this.speedV;
		}
		// upright
		else if (this.upActive == true && this.rightActive == true && this.downActive == false && this.leftActive == false)
		{
		  this.x += this.speedH;
		  this.y -= this.speedV;
		}
		// downleft
		else if (this.downActive == true && this.leftActive == true && this.upActive == false && this.rightActive == false)
		{
		  this.x -= this.speedH;
		  this.y += this.speedV;
		}
		// downright
		else if (this.downActive == true && this.rightActive == true && this.upActive == false && this.leftActive == false)
		{
		  this.x += this.speedH;
		  this.y += this.speedV;
		}
		// up
		else if (this.upActive == true && this.leftActive == false && this.downActive == false && this.rightActive == false)
		{
		  this.y -= this.speedV;
		}
		// left
		else if (this.upActive == false && this.leftActive == true && this.downActive == false && this.rightActive == false)
		{
		  this.x -= this.speedH;
		}
		// down
		else if (this.upActive == false && this.leftActive == false && this.downActive == true && this.rightActive == false)
		{
		  this.y += this.speedV;
			console.log('moving down');
		}
		// right
		else if (this.upActive == false && this.leftActive == false && this.downActive == false && this.rightActive == true)
		{
		  this.x += this.speedH;
		}

	}

	charKeyPressed()
	{
		if (key == 's' || key == 'S')
		{
			this.downActive = true;
		}
		if (key == 'w' || key == 'W')
		{
			this.upActive = true;
		}
		if (key == 'a' || key == 'A')
		{
			this.leftActive = true;
		}
		if (key == 'D' || key == 'D')
		{
			this.rightActive = true;
		}
	}

	charKeyReleased()
	{
		if (key == 'w' || key == 'W' && this.upActive == true)
		{
			this.upActive = false;
		}
		if (key == 's' || key == 'S' && this.downActive == true)
		{
			this.downActive = false;
		}
		if (key == 'a' || key == 'A' && this.leftActive == true)
		{
			this.leftActive = false;
		}
		if (key == 'D' || key == 'D' && this.rightActive == true)
		{
			this.rightActive = false;
		}
	}

	drawCharacter()
	{
		if (this.alive == 1)
		{
			if (this.charImage == null)
			{
				ellipse(this.x,this.y,this.length,this.height);
			}
			else
			{
				image(this.charImage,this.x,this.y,this.length,this.height);
			}
		}
		else if (this.alive == 0 && this.deathAnimation != null && this.deathAnimation.isAnimationFinished() != -1)
		{
			this.deathAnimation.drawAnimation();
		}
		else if (this.alive == 0 && this.deathAnimation != null && this.deathAnimation.isAnimationFinished() == -1)
		{
			this.alive = -1;
		}
	}

	killCharacter()
	{
		this.alive = 0;
		if (this.deathAnimation != null)
		{
			this.deathAnimation.setXY(this.getX(),this.getY());
			this.deathAnimation.startAnimation();
		}
	}

	birthCharacter()
	{
		this.alive = 1;
	}

	isAlive()
	{
		return this.alive;
	}



}
