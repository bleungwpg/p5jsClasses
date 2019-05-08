class HealthBar {
	constructor(startH,maxH)
	{
		this.startH = startH;
		this.currentH = startH;
		this.maxH = maxH;
		this.length = 200;
		this.height = 25;
		this.x = 10;
		this.y = 25;
		this.topR = 0;
		this.topG = 255;
		this.topB = 0;
		this.botR = 255;
		this.botG = 50;
		this.botB = 50;
		this.botT = 80;
		this.delayTime = 1000;
		this.heart = 10;
		this.heartSpace = 32;
	}

	deductHealth(amount)
	{
		this.currentH = this.currentH - amount;
		if (this.currentH <= 0)
		{
			this.currentH = 0;
		}
	}

	getCurrentHealth()
	{
		return this.currentH;
	}

	// reset the current health bar to the original maximum
	resetHealth()
	{
		this.currentH = startH;
	}

	// set x and y coordinate of health bar
	setHealthBarXY(x,y)
	{
		this.x = x;
		this.y = y;
	}

	// set length and height of health bar
	setHealthBarLH(l,h)
	{
		this.length = l;
		this.height = h;
	}

	// set RGB value of the top health bar
	setTopHealthColor(r,g,b)
	{
		this.topR = r;
		this.topG = g;
		this.topB = b;
	}

	// set RGB value plus the transparecy value of the bottom health bar
	setBoTHealthColor(r,g,b,t)
	{
		this.botR = r;
		this.botG = g;
		this.botB = b;
		this.botT = t;
	}

	showHealthBar()
	{
		if (this.currentH > 0)
		{
			stroke(0,0,0);
			strokeWeight(2);
			fill(this.botR,this.botG,this.botB,this.botT);
			rect(this.x-1,this.y-1,this.length+2,this.height+2);
			strokeWeight(0);
			fill(this.topR,this.topG,this.topB);
			rect(this.x,this.y,this.length*(this.currentH/this.maxH),this.height);
		}

	}

	isAlive()
	{
		if (this.currentH > 0)
		{
			return true;
		}
		else {
			return false;
		}
	}

	setHealthIcon(heart)
	{
		this.heart = heart;
	}

	setHealthSpacing(space)
	{
		this.heartSpace = space;
	}

	showHealthIcons()
	{
		for (var i = 0; i < this.currentH; i++)
		{
			image(this.heart,this.x+i*this.heartSpace,this.y);
		}
	}
}
