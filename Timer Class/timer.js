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

	textOff()
	{
		this.turnTextOff = true;
	}

	textOn()
	{
		this.turnTextOff = false;
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

/*
var start;
var fps;
var length;
var height;
var x;
var y;
var r;
var g;
var b;

function Timer(x,y,length,height)
{
	this.fps = 30;
	this.start = 0;
	this.r = 200;
	this.g = 200;
	this.b = 200;
	this.x = x;
	this.y = y;
	this.length = length;
	this.height = height;
}

function drawTimer()
{
	fill(this.r,this.g,this.b);
	rect(this.x,this.y,this.length,this.height);
    
}

function startTimer()
{

}



function resetTimer()
{
	fill(0,0,255);
	rect(100,100,100,50);

	fill(255,255,255);
	text("Main Menu",120,125);

	if (mouseX > 100 && mouseX < 100+100 && mouseY > 100 && mouseY < 100+50 && mouseIsPressed)
	{
		window.open("2mainmenu.html","_self");
	}
}
*/