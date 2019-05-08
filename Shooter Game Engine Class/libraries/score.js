class Score {
	constructor()
	{
		this.score = 0;
		this.x = 10;
		this.y = 10;
	}

	addScore(amount)
	{
		this.score = this.score + amount;
	}

	getCurrentScore()
	{
		return this.score;
	}

	// reset the current health bar to the original maximum
	resetScore()
	{
		this.score = 0;
	}

	// set x and y coordinate of health bar
	setScoreXY(x,y)
	{
		this.x = x;
		this.y = y;
	}

	// set RGB value of the top health bar
	setTopHealthColor(r,g,b)
	{
		this.topR = r;
		this.topG = g;
		this.topB = b;
	}

	showScore()
	{
		fill(200,200,200);
		rect(this.x,this.y,50,25);
		strokeWeight(0);
		fill(0,0,0);
		text(this.score,this.x+10,this.y+16);
	}
}
