class Animation {
	constructor(x,y,length,height,maxFrameCount,frameData)
	{
		// 0 means not started
		// -1 means animation is finished
		// 1 means animation has started
		this.animationFinished = 0;
		this.doOnce = 0;
		this.frameCounter = 0;
		this.animateCounter = 0;
		this.doOnce = 0;
		this.repeatAnimation = false;
		this.animationSpeed = 10;
		this.length = length;
		this.height = height;
		this.x = x;
		this.y = y;
		this.maxFrameCount = maxFrameCount;
		this.frameData = new Array(maxFrameCount);
		for (var x = 0; x < maxFrameCount; x++)
		{
			this.frameData[x] = frameData[x];
		}
	}

	setAnimationSpeed(speed)
	{
		this.animationSpeed = speed;
	}

	setRepeatAnimation(bool)
	{
		this.repeatAnimation = bool;
	}

	setXY(x,y)
	{
		this.x = x-this.length/2;
		this.y = y-this.height/2;
	}

	startAnimation()
	{
		this.animationFinished = 1;
	}

	isAnimationFinished()
	{
		return this.animationFinished;
	}

	drawAnimation()
	{
		if (this.animationFinished == 1)
		{
			if (this.repeatAnimation == false && this.doOnce == 0)
			{
				image(this.frameData[this.animateCounter],this.x,this.y,this.length,this.height);
				this.frameCounter++;
				if (this.frameCounter > this.animationSpeed)
				{
console.log(this.animateCounter);
					this.frameCounter = 0;
					this.animateCounter++;
					if (this.animateCounter >= this.maxFrameCount)
					{
						this.animateCounter = 0;
						this.doOnce = 1;
						this.animationFinished = -1;
					}
				}
			}
			else if (this.repeatAnimation == true) {
				image(this.frameData[this.animateCounter],this.x,this.y,this.length,this.height);
				this.frameCounter++;
				if (this.frameCounter > this.animationSpeed)
				{
					this.frameCounter = 0;
					this.animateCounter++;
					if (this.animateCounter >= this.maxFrameCount)
					{
						this.animateCounter = 0;
					}
				}
			}

//			console.log(this.animateCounter);

		}
	}
}
