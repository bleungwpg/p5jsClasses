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

	}

	setCharacterImage(img,length,height)
	{
		this.length = length;
		this.height = height;
		this.charImage = img;
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
		return this.x;
	}

	getY()
	{
		return this.y;
	}

	getRadius()
	{
		return this.length/2;
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
		if (this.charImage == null)
		{
			ellipse(this.x,this.y,this.length,this.height);
		}
		else
		{
			image(this.charImage,this.x-this.length/2,this.y-this.height/2);
		}
	}



}
