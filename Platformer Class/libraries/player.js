class Player {
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.image = null;
		this.length = 10;
		this.height = 10;

		this.xMin = x;
		this.xMax = this.x;

		this.yMin = y;
		this.yMax = this.y;

		this.upActive = false;
		this.downActive = false;
		this.leftActive = false;
		this.rightActive = false;

		this.sensitivity = 5;
		this.gravity = 3;


		this.touchingPlatform = false;



		// left and right movement speed of player
		this.playerSpeed = 3;

		this.falling = true;

		this.jumpMaxHeight = 150;
		this.jump = 0;
		this.jumpSpeed = 6;
		this.jumpCounter = 0;
		this.moveLR = "stop";
	}

	addX(amount)
	{
		this.x += amount;
		this.xMax += amount;
	}

	subX(amount)
	{
		this.x -= amount;
		this.xMax -= amount;
	}

	addY(amount)
	{
		this.y += amount;
		this.yMax += amount;
	}

	subY(amount)
	{
		this.y -= amount;
		this.yMax -= amount;
	}


	drawPlayer(platforms)
	{
		if (this.image == null)
		{
			// draw player
			fill(255,0,0);
			ellipse(this.x,this.y,10,10);
		}
		else {
			image(this.image,this.x,this.y,this.length,this.height);
		}
		var touch = this.playerOnPlatform(platforms);
		this.manageJumpAndFall();
		this.manageMoveLR();

		return touch;
	}

	setPlayerImage(img,l,h)
	{
		this.image = img;
		this.length = l;
		this.height = h;
		this.xMax = this.x+this.length;
		this.yMax = this.y+this.height;

	}

	manageJumpAndFall()
	{
		// character jump
		if (this.jump == 1)
		{
			// up movement
			if (this.jumpCounter == 0)
			{
				this.maxHeight = this.y - this.jumpMaxHeight;
				this.jumpCounter = 1;
			}

			if (this.jumpCounter == 1)
			{
				// rate of up movement
				this.subY(this.jumpSpeed);

				// maximum jump height
				// CHECK IF PLAYER HAS HIT A BLOCK OR NOT
				if (this.y < this.maxHeight)
				{
					this.falling = true;
					this.jump = 2;
				}
			}
		}

		if (this.falling == true && this.touchingPlatform == false)
		{
			// rate of down movement
//console.log(this.touchingPlatform);
			this.addY(this.gravity);
		}
	}

	manageMoveLR()
	{
		// left
		if (this.upActive == false && this.leftActive == true && this.downActive == false && this.rightActive == false)
		{
			this.subX(this.playerSpeed);
		}
		// right
		else if (this.upActive == false && this.leftActive == false && this.downActive == false && this.rightActive == true)
		{
			this.addX(this.playerSpeed);
		}
		else if (this.upActive == true && this.leftActive == false && this.downActive == false && this.rightActive == true)
		{
			this.addX(this.playerSpeed);
		}
		else if (this.upActive == true && this.leftActive == true && this.downActive == false && this.rightActive == false)
		{
			this.subX(this.playerSpeed);
		}

	}


	playerOnPlatform(platforms)
	{
		// if the bottom of a block is touched return the block id
		var touch = -1;

		this.touchingPlatform = false;

		// check if character is on platform
		for (var c = 0; c < platforms.length; c++)
		{
			// check platform rules behavior and conduct checks accordingly
			// if behavior == 0 then all sides must be checked
			if (platforms[c].getPlatformBehavior() == 0 && platforms[c].isCollidable())
			{
				// TOP of platform check
				if (this.yMax <= platforms[c].getYMin()+this.sensitivity && this.yMax >= platforms[c].getYMin()-this.sensitivity && ((this.xMax > platforms[c].getXMin() && this.xMax < platforms[c].getXMax()) || (this.x > platforms[c].getXMin() && this.x < platforms[c].getXMax())))
				{
					this.yMax = platforms[c].getYMin()-this.sensitivity;
					this.y = this.yMax - this.height;
					if (this.falling == true)
					{
						this.jump = 0;
						this.jumpCounter = 0;
					}
					this.falling = false;
					this.touchingPlatform = true;
					break;
				}
				// BOT of platform check
				if (this.y <= platforms[c].getYMax()+this.sensitivity && this.y >= platforms[c].getYMax()-this.sensitivity && ((this.xMax > platforms[c].getXMin() && this.xMax < platforms[c].getXMax()) || (this.x > platforms[c].getXMin() && this.x < platforms[c].getXMax())) && this.jumpCounter == 1)
				{
					this.jump = 2;
					this.falling = true;
					touch = c;
					break;
				}
				// LEFT of platform check
				if (((this.y >= platforms[c].getYMin() && this.y <= platforms[c].getYMax()) || (this.yMax >= platforms[c].getYMin() && this.yMax <= platforms[c].getYMax())) && this.xMax > platforms[c].getXMin()-this.sensitivity && this.xMax < platforms[c].getXMin()+this.sensitivity)
				{
					this.xMax = platforms[c].getXMin()-this.sensitivity;
					this.x = this.xMax-this.length;
					break;
				}

				// RIGHT of platform check
				if (((this.y >= platforms[c].getYMin() && this.y <= platforms[c].getYMax()) || (this.yMax >= platforms[c].getYMin() && this.yMax <= platforms[c].getYMax())) && this.x > platforms[c].getXMax()-this.sensitivity && this.x < platforms[c].getXMax()+this.sensitivity)
				{
					this.x = platforms[c].getXMax()+this.sensitivity;
					this.xMax = this.x + this.length;
					break;
				}

			}
			// check platform rules behavior and conduct checks accordingly
			// if behavior == 1 you only need to check top platform
			else if (platforms[c].getPlatformBehavior() == 1 && platforms[c].isCollidable())
			{
				// TOP of platform check
				if (this.y <= platforms[c].getYMin()+this.sensitivity && this.y >= platforms[c].getYMin()-this.sensitivity && this.x > platforms[c].getXMin() && this.x < platforms[c].getXMax())
				{
					this.y = platforms[c].getYMin()-this.sensitivity;
					if (this.falling == true)
					{
						this.jump = 0;
						this.jumpCounter = 0;
					}
					this.falling = false;
					this.touchingPlatform = true;
					break;
				}
			}

		}
		this.falling = true;

		return touch;
	}


	charKeyPressed()
	{
		if (this.downActive == true && key == 's' || key == 'S')
		{
			this.downActive = true;
		}
//console.log(this.jump);
//console.log(this.touchingPlatform);
		if (this.upActive == true && key == 'w' || key == 'W' && this.jump == 0 && this.touchingPlatform == true)
		{
			this.jump = 1;
			this.falling = false;
			this.upActive = true;
		}
		if (this.leftActive == true && key == 'a' || key == 'A')
		{
			this.leftActive = true;
		}
		if (this.rightActive == true && key == 'D' || key == 'D')
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
}
