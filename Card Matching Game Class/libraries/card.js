class Card {
	constructor(img,id,x,y,r,c,l,h,flippedImg,flipAnimation)
	{
		this.flippedImg = flippedImg;
		this.img = img;
		// flipped = 0; not turned gameOver
		// flipped = 1; card is shown
		// flipped = 2; card is covered
		this.flipped = 2;

		// the identifier for the card
		this.id = id;

		// where the card is in the grid
		this.r = r;
		this.c = c;

		// the coordinates of the cardDeck
		this.x = x;
		this.y = y;

		this.l = l;
		this.h = h;

		this.cardButton = new Button(this.x,this.y,this.l,this.h);
		this.cardButton.setHidden(true);

		this.flipAnimation = null;

		if (flipAnimation != null)
		{
			this.flipAnimation = new Animation(x,y,l,h,flipAnimation.length,flipAnimation);
		}

	}

	getCardState()
	{
		return this.flipped;
	}

	// flipState - 1; card is shown
	// flipState - 2; card is removed
	// flipState - 0; card is removed
	// flipState - 3; card is animated
	flipCard()
	{
		if (this.flipped == 1)
		{
			// change this later
			this.flipped = 2;
		}
		else if (this.flipped == 2) {
			this.flipped = -2;
			if (this.flipAnimation != null)
			{
				this.flipAnimation.startAnimation();
			}

		}
	}

	removeCard()
	{
		this.flipped = 0;
	}

	match(anotherCard)
	{
		// check if the identifier is the same and the position is the same
//		console.log('row '+this.r+anotherCard.getR());
//		console.log('col '+this.c+anotherCard.getC());
//		console.log('id  '+this.id+anotherCard.getID());
		if (this.id == anotherCard.getID() && (this.r != anotherCard.getR() || this.c != anotherCard.getC()))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	show(canFlipCard)
	{
		// allows card to act like a button so you can flip it
		if (canFlipCard == true)
		{
			// flipped = 0; not turned gameOver
			// flipped = 1; card is shown
			// flipped = 2; card is covered
			if (this.flipped == 1)
			{
				image(this.img,this.x,this.y,this.l,this.h);
			}
			else if (this.flipped == 2)
			{
				image(this.flippedImg,this.x,this.y,this.l,this.h);
			}
			else if (this.flipped == -2)
			{
				if (this.flipAnimation != null)
				{
					if (this.flipAnimation.isAnimationFinished() == 1)
					{
						this.flipAnimation.drawAnimation();
					}
					else {
						this.flipped = 1;
	//					console.log('set card back');
					}
				}
				else {
					this.flipped = 1;
				}
			}
			else if (this.flipped == 0)
			{
				return 2;
			}
			this.cardButton.showButton();
			return this.cardButton.getButtonState();
		}
		// otherwise disable "button" feature of card so you cannot flip it
		else {
			if (this.flipped == 1)
			{
				image(this.img,this.x,this.y,this.l,this.h);
			}
			else if (this.flipped == 2)
			{
				image(this.flippedImg,this.x,this.y,this.l,this.h);
			}
			else if (this.flipped == -2)
			{
				image(this.flippedImg,this.x,this.y,this.l,this.h);
			}
			else if (this.flipped == 0)
			{
				return 2;
			}
//			this.cardButton.showButton();
			return this.cardButton.getButtonState();
		}
	}

	getID()
	{
		return this.id;
	}

	getR()
	{
		return this.r;
	}

	getC()
	{
		return this.c;
	}

	getX()
	{
		return this.x;
	}

	getY()
	{
		return this.y;
	}
}
