class QuestionManager {
	constructor(numberOfPlatforms,images,random,answer,numberOfWalls)
	{
		this.numberOfWalls = numberOfWalls;
		this.numberOfPlatforms = numberOfPlatforms;
		this.images = images;
		this.answer = answer;
		this.length = 0;
		this.height = 0;
		this.random = random;
		this.endOfQuestion = false;
		this.startQuestion = false;


		this.platformSet = new Array(numberOfPlatforms+numberOfWalls);
		this.randomOrder = new Array(numberOfPlatforms);

		this.questionImage = null;
		this.questionX = 0;
		this.questionY = 0;


		// timer
		this.myTimer = new Timer(0,0,0,0);
		this.myTimer.resetTimer();
		this.countdownTimer = false;
		this.finishedCountdownTimer = false;


		if (images == null)
		{
			for (var x = 0; x < numberOfPlatforms; x++)
			{
				this.platformSet[x] = new Platforms(0+50*x,300);
			}
		}
		else {
			if (this.random == true)
			{
//				console.log('count');
				this.generateRandomList();
			}
			for (var x = 0; x < numberOfPlatforms; x++)
			{
				this.platformSet[x] = new Platforms(100+50*x,25);
				if (this.random == true)
				{
					this.platformSet[x].setImage(images[this.randomOrder[x]],50,50);
				}
				else {
					this.platformSet[x].setImage(images[x],50,50);
				}
			}
		}

	}

	hasStarted()
	{
		return this.startQuestion;
	}

	start()
	{
		this.startQuestion = true;
	}

	getAnswer()
	{
		return this.answer;
	}

	addPlatform(id,x,y,l,h)
	{
		this.platformSet[id] = new Platforms(x,y);
		this.platformSet[id].setLH(l,h);
	}

	addImagePlatform(id,image,x,y,l,h)
	{
		this.platformSet[id] = new Platforms(x,y);
		this.platformSet[id].setLH(l,h);
		this.platformSet[id].setImage(image,l,h);
	}


	generateRandomList()
	{
		var found = false;
		for (var x = 0; x < this.numberOfPlatforms; x++)
		{
			this.randomOrder[x] = -1;
		}

		for (var x = 0; x < this.numberOfPlatforms; x++)
		{
			var finished = false;
			var currentValue = 0;
			while (finished == false)
			{
				currentValue = int(random(0,this.numberOfPlatforms));
				for (var q = 0; q < this.numberOfPlatforms; q++)
				{
					if (this.randomOrder[q] == currentValue)
					{
						finished = false;
						break;
					}
					else {
						finished = true;
					}
				}
			}

			if (currentValue == this.answer && found == false)
			{
				this.answer = x;
				found = true;
			}
			this.randomOrder[x] = currentValue;
		}
	}

	setPlatformSpacing(s)
	{
		for (var x = 0; x < this.numberOfPlatforms; x++)
		{
			this.platformSet[x].setXY(100+s*x,this.platformSet[x].getY());
		}
	}


	setLengthHeight(l,h)
	{
		for (var x = 0; x < this.numberOfPlatforms.length; x++)
		{
			this.platformSet[x].setLengthHeight(l,h);
		}
	}

	setQuestion(q,x,y)
	{
		this.questionImage = q;
		this.questionX = x;
		this.questionY = y;
	}

	setPlatformImage(id,image,length,height)
	{
		this.platformSet[id].setImage(image,length,height);
	}

	setDeathAnimation(deathAnimation)
	{
		for (var x = 0; x < this.numberOfPlatforms; x++)
		{
			this.platformSet[x].setDeathAnimation(deathAnimation);
		}
	}

	// take on a true / false value to see if position of enemies needs to be randomized
	setRandom(rand)
	{
		this.random = rand;
	}

	setDeathAnimation(deathAnimation)
	{
		for (var x = 0; x < this.numberOfPlatforms; x++)
		{
			this.platformSet[x].setDeathAnimation(deathAnimation);
		}
	}


	setPlatform(id,x,y,length,height,image)
	{
		this.platformSet[id].setXY(x,y);
		this.platformSet[id].setLH(length,height);
		this.platformSet[id].setImage(image,length,height);
	}

	drawQuestion()
	{
		image(this.questionImage,this.questionX,this.questionY);
	}

//	drawPlatforms(myProjManager)
	drawPlatforms()
	{
		// 0 - the question is still operational
		// 1 - a block has been destroyed
		// 2 - the answer block has been destroyed
		var returnState = 0;


		if (this.endOfQuestion == false)
		{
			// draw the question
//			this.enemySet[this.numberOfEnemies-1].drawCharacter();


			// draw all enemies
			for (var i = 0; i < this.numberOfPlatforms+this.numberOfWalls; i++)
			{
				if (this.platformSet[i].platformExists() == true)
				{
					this.platformSet[i].drawPlatform();
				}
				else if (this.platformSet[i].platformExists() == false)
				{
					console.log('platform destroyed');
				}

				/*
				if (myProjManager.hasCollided(this.platformSet[i]) == true)
				{
					this.platformSet[i].destroyPlatform();
				}
				*/
			}
		}
		return returnState;
	}

	isAnswerAlive()
	{
		if (this.platformSet[this.answer].isAlive() != 0)
		{
			return true;
		}
		else {
			return false;
		}
	}

	destroyPlatform(id)
	{
		this.platformSet[id].destroyPlatform();
	}

	startCountdownTimer()
	{
		this.countdownTimer = true;
	}

/*
	isCountdownTimerStarted()
	{
		return this.countdownTimer;
	}
*/

	isCountdownTimerFinished()
	{
		return this.finishedCountdownTimer;
	}

	runTimer()
	{
		if (this.countdownTimer == true)
		{
			if (!this.myTimer.isTimerFinished())
			{
				this.myTimer.startTimer();
			}
			else {
				this.finishedCountdownTimer = true;
			}
		}
	}

	endQuestion()
	{
		this.endOfQuestion = true;
		this.startQuestion = false;
	}

	isQuestionFinished()
	{
		return this.endOfQuestion;
	}

	getAllPlatforms()
	{
		return this.platformSet;
	}
}
