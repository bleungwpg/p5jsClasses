class CardDeck {
	constructor(l,h,r,c,flippedCard)
	{
		// basic data
		this.maxCardMatch = 2;
		this.randomize = false;
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
			var newR = 0;
			var newC = 0;
		}
		else {
			this.cardData[this.currentC][this.currentR] = new Card(img,id,this.currentC*this.l,this.currentR*this.h,this.currentR,this.currentC,this.l,this.h,this.flippedImg);;
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
					if (this.cardData[h][v].show() == 1)
					{
						if (this.flippedSound != null)
						{
							this.flippedSound.play();
						}
						this.cardData[h][v].flipCard();
						console.log('flip card');
					}
					else if (this.cardData[h][v].show() == 2)
					{
						i++;
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
		if (i == 2)
		{
			var match = true;
			for (var x = 0; x < i-1; x++)
			{
				if (!this.matchCardArray[x].match(this.matchCardArray[x+1]))
						match = false;
			}
			if (match == true)
			{
				if (order == "remove")
				{
					for (var x = 0; x < this.maxCardMatch; x++)
					{
						this.matchCardArray[x].removeCard();
					}
				}

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

				return 1;
			}
		}
		else
		{
			return 0;
		}
	}

}
