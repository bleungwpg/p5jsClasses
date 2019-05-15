class CardDeck {
	constructor(l,h,r,c,flippedCard,random)
	{
		// basic data
		this.maxCardCounter = 0;
		this.maxCardMatch = 2;
		this.randomize = random;
		this.currentR = 0;
		this.currentC = 0;
		this.flippedImg = flippedCard;
		this.currentCardCount = 0;
		this.maxCard = r*c;
		this.startX = 10;
		this.startY = 10;
		this.l = l;
		this.h = h;
		this.maxRow = r;
		this.maxCol = c;
		this.cardData = new Array(this.maxRow);
		this.matchCardArray = new Array(this.maxCardMatch);

		this.beginReset = false;
		this.cannotFlipCard = false;


		// random stuff
		this.randomOrder = new Array(this.maxRow);
		for (var q = 0; q < this.randomOrder.length; q++)
		{
			this.randomOrder[q] = new Array(this.maxCol);
		}


		// sounds
		this.flippedSound = null;

		// initialize array of cards
		for (var a = 0; a < this.maxCol; a++)
		{
			this.cardData[a] = new Array(this.maxCol);
		}

		for (var ver = 0; ver < this.maxRow; ver++)
		{
			for (var hor = 0; hor < this.maxCol; hor++)
			{
				this.cardData[hor][ver] = null;
			}
		}

		// flip animation
		this.flipAnimation = null;
	}

/*
	setDelayTimer(time)
	{
		this.delayTimer.setMaxTime(time);  // set timer to countdown from user defined 'time'
	}
*/
	setMaxCardMatch(x)
	{
		this.maxCardMatch = x;
	}

	addCard(img,id)
	{
		if (this.randomize == true)
		{
			// find an empty card slot
			var newR = int(random(0,this.maxRow));
			var newC = int(random(0,this.maxCol));

			while (this.cardData[newC][newR] != null)
			{
				newR = int(random(0,this.maxRow));
				newC = int(random(0,this.maxCol));
			}

			// new slot has been found assign a card to it
			if (this.flipAnimation == null)
			{
			  this.cardData[newC][newR] = new Card(img,id,newC*this.l,newR*this.h,newR,newC,this.l,this.h,this.flippedImg,null);
			}
			else {
			  this.cardData[newC][newR] = new Card(img,id,newC*this.l,newR*this.h,newR,newC,this.l,this.h,this.flippedImg,this.flipAnimation);
			}
			this.currentC++;
			if (this.currentC >= this.maxCol)
			{
				this.currentC = 0;
				this.currentR++;
			}
		}
		else {
			if (this.flipAnimation == null)
			{
				this.cardData[this.currentC][this.currentR] = new Card(img,id,this.currentC*this.l,this.currentR*this.h,this.currentR,this.currentC,this.l,this.h,this.flippedImg,null);
			}
			else {
				this.cardData[this.currentC][this.currentR] = new Card(img,id,this.currentC*this.l,this.currentR*this.h,this.currentR,this.currentC,this.l,this.h,this.flippedImg,this.flipAnimation);
			}
			this.currentC++;
			if (this.currentC >= this.maxCol)
			{
				this.currentC = 0;
				this.currentR++;
			}
		}
	}

	setFlippedSound(soundFile)
	{
		this.flippedSound = soundFile;
	}

	setStartXY(x,y)
	{
		this.startX = x;
		this.startY = y;
	}

	setFlipAnimation(animation)
	{
		this.flipAnimation = new Array(animation.length)

		for (var x = 0; x < animation.length; x++)
		{
			this.flipAnimation[x] = animation[x];
		}
	}

	setMaxH(maxH)
	{
		this.maxH = maxH;
		this.maxV = round(this.maxCard / this.maxH);
	}

	setMaxV(maxV)
	{
		this.maxV = maxV;
		this.maxH = round(this.maxCard / this.maxV);
	}

	showDeck()
	{
		var i = 0;
		for (var v = 0; v < this.maxRow; v++)
		{
			for (var h = 0; h < this.maxCol; h++)
			{
				// check to make sure there is data in the card
				if (this.cardData[h][v] != null)
				{
					// check if the card is flipped
					// check if max number of cards is flipped
					if (this.cannotFlipCard == false)
					{
						if (this.cardData[h][v].show(true) == 1)
						{
							if (this.flippedSound != null)
							{
								this.flippedSound.play();
							}
							this.cardData[h][v].flipCard();
							this.maxCardCounter++;
//	console.log(this.maxCardCounter);
	//						console.log('flip card');
						}
						else if (this.cardData[h][v].show(true) == 3)
						{

						}
						else if (this.cardData[h][v].show(true) == 2)
						{
							i++;
						}
					}
					// you cannot flip a card if timer has been initiated; this also means the max number of cards have been flipped
					else if (this.cannotFlipCard == true) {
						if (this.cardData[h][v].show(false) == 1)
						{
							if (this.flippedSound != null)
							{
								this.flippedSound.play();
							}
							this.cardData[h][v].flipCard();
							this.maxCardCounter++;
						}
						else if (this.cardData[h][v].show(false) == 3)
						{

						}
						else if (this.cardData[h][v].show(false) == 2)
						{
							i++;
						}
					}
				}
			}
		}
		if (i >= this.maxCard)
		{
			return 1;
		}
		else {
			return 0;
		}

	}

	checkMatch(order)
	{
		var i = 0;

		for (var v = 0; v < this.maxRow; v++)
		{
			for (var h = 0; h < this.maxCol; h++)
			{
				if (this.cardData[h][v].getCardState() == 1)
				{
					this.matchCardArray[i] = this.cardData[h][v];
					i++;
				}
			}
		}

		// if you have flipped the max number of cards
		// reset the game
		if (i == this.maxCardMatch)
		{
			this.beginReset = true;
			var match = true;
			for (var x = 0; x < i-1; x++)
			{
				if (!this.matchCardArray[x].match(this.matchCardArray[x+1]))
				{
					match = false;
//console.log('mismatch');
				}
			}
			if (match == true)
			{
				if (order == "remove")
				{
//					console.log('removing card');
					for (var x = 0; x < this.maxCardMatch; x++)
					{
						this.matchCardArray[x].removeCard();
					}
				}
				console.log('remove');
				this.cannotFlipCard = true;
				return 2;
			}
			else
			{
				if (order == "reset")
				{
					for (var x = 0; x < this.maxCardMatch; x++)
					{
						this.matchCardArray[x].flipCard();
					}
				}
//				console.log('reset');
				this.cannotFlipCard = true;
				return 1;
			}
		}
		else
		{
			if (this.beginReset == true)
			{
				this.beginReset = false;
				this.cannotFlipCard = false;
				this.maxCardCounter = 0;
			}
			this.cannotFlipCard = false;
			return 0;
		}
	}

}
