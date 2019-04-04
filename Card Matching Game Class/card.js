class Card {
	constructor(img,id,x,y,r,c,l,h,flippedImg)
	{
		this.flippedImg = flippedImg;
		this.img = img;
		// flipped = 0; not turned gameOver
		// flipped = 1; turned over
		this.flipped = 0;

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
	}

	getCardState()
	{
		return this.flipped;
	}

	flipCard()
	{
		if (this.flipped == 1)
		{
			this.flipped = 0;
		}
		else if (this.flipped == 0) {
			this.flipped = 1;
		}
	}

	removeCard()
	{
		this.flipped = 2;
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

	show()
	{
		if (this.flipped == 1)
		{
			image(this.img,this.x,this.y,this.l,this.h);
		}
		else if (this.flipped == 0)
		{
			image(this.flippedImg,this.x,this.y,this.l,this.h);
		}
		else if (this.flipped == 2)
		{
			return 2;
		}
		this.cardButton.showButton();
		return this.cardButton.getButtonState();
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
