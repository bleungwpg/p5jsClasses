class Timer {
	constructor(x,y,length,height)
	{
		this.x = x;
		this.y = y;
		this.length = length;
		this.lengthAnimation = length;
		this.height = height;
		this.r = 255;
		this.g = 255;
		this.b = 255;
		this.textR = 0;
		this.textG = 0;
		this.textB = 0;
		this.startFlag = 2;
		this.endTime = 0;
		this.userMaxTime = 5;
		this.frameRate = 30;
		this.countDown = true;
		this.turnTextOff = false;
	}

	setMaxTime(newTime)
	{
		this.userMaxTime = newTime;
	}

	countDown()
	{
		this.countDown = true;
	}

	countUp()
	{
		this.countDown = false;
	}

	resetTimer()
	{
		this.startFlag = 0;
	}

	startTimer()
	{
//		console.log(this.startFlag==0);
		if (this.startFlag == 0)
		{
			this.startFlag = 1;
//			console.log(this.startFlag);

			this.endTime = frameCount + this.frameRate * this.userMaxTime;
		}
		if (this.startFlag == 1)
		{
			var timePercent = (this.endTime - frameCount) / (this.frameRate * this.userMaxTime);

			if (this.countDown)
			{
				this.lengthAnimation =  timePercent * this.length;
//				console.log(this.lengthAnimation);
			}
			else
			{
				this.lengthAnimation =  (1-timePercent) * this.length;
//				console.log(timePercent);
			}


			if (frameCount >= this.endTime)
			{
				this.startFlag = 2;
				if (this.countDown)
				{
					this.lengthAnimation = 0;
				}
				else
				{
					this.lengthAnimation = this.length;
				}
			}

		}

	}

	isTimerFinished()
	{
//		console.log(this.startFlag);
		if (this.startFlag == 2)
		{
			return true;
		}
		else {
				return false;
		}
	}

	textOff()
	{
		this.turnTextOff = true;
	}

	textOn()
	{
		this.turnTextOff = false;
	}

	getTimerState()
	{
		return this.startFlag;
	}

	drawTimer()
	{
		fill(this.r,this.g,this.b);
		rect(this.x,this.y,this.lengthAnimation,this.height);

		if (!this.turnTextOff)
		{
			fill(this.textR,this.textG,this.textB);
			text(round(this.lengthAnimation/this.length*this.userMaxTime),this.x+10,this.y+10);
		}
	}

	getCurrentTime()
	{
		return round(this.lengthAnimation/this.length*this.userMaxTime);
	}

	setTimerColor(r,g,b)
	{
		this.r = r;
		this.g = g;
		this.b = b;
	}
}
