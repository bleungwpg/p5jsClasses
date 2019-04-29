class EnemyManager {
	constructor(numberOfEnemies,images,random,answer)
	{
		// 0 means not started
		// -1 means animation is finished
		// 1 means animation has started
		this.numberOfEnemies = numberOfEnemies;
		this.images = images;
		this.answer = answer;
		this.length = 0;
		this.height = 0;
		this.random = random;
		this.outOfScreenRange = 0;
		this.enemySet = new Array(numberOfEnemies);
		this.enemySpeed = 1;

		// the question
		this.question = null;
		this.questionX = null;
		this.questionY = null;

		this.randomOrder = new Array(numberOfEnemies);


		if (images == null)
		{
			for (var x = 0; x < numberOfEnemies; x++)
			{
				this.enemySet[x] = new Character(100+50*x,25);
				this.enemySet[x].setSpeedV(this.enemySpeed);
			}
		}
		else {
			if (this.random == true)
			{
//				console.log('count');
				this.generateRandomList();
			}
			for (var x = 0; x < numberOfEnemies; x++)
			{
				this.enemySet[x] = new Character(100+50*x,25);
				if (this.random == true)
				{
					this.enemySet[x].setCharacterImage(images[this.randomOrder[x]],50,50);
				}
				else {
					this.enemySet[x].setCharacterImage(images[x],50,50);
				}
				this.enemySet[x].setSpeedV(this.enemySpeed);
			}
		}
		this.endOfQuestion = true;
	}

	generateRandomList()
	{
		var found = false;
		for (var x = 0; x < this.numberOfEnemies; x++)
		{
			this.randomOrder[x] = -1;
		}

		for (var x = 0; x < this.numberOfEnemies; x++)
		{
			var finished = false;
			var currentValue = 0;
			while (finished == false)
			{
				currentValue = int(random(0,this.numberOfEnemies));
//				console.log(currentValue);

//				console.log(this.randomOrder[x]);
				for (var q = 0; q < this.numberOfEnemies; q++)
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
//				console.log(currentValue);
			}

			if (currentValue == this.answer && found == false)
			{
//				console.log('currentValue is '+currentValue+'    answer is '+this.answer+'    x is '+x);

				this.answer = x;
				found = true;
//				console.log('this new answer is'+x);
			}
//			console.log(x+' is '+currentValue);
			this.randomOrder[x] = currentValue;
		}
	}

	setEnemySpacing(s)
	{
		for (var x = 0; x < this.numberOfEnemies; x++)
		{
			this.enemySet[x].setXY(100+s*x,this.enemySet[x].getY());
		}
	}

	setEnemySpeed(s)
	{
		this.enemySpeed = s;
		for (var x = 0; x < this.enemySet.length; x++)
		{
			this.enemySet[x].setSpeedV(s);
		}
	}

	setLengthHeight(l,h)
	{
		for (var x = 0; x < this.enemySet.length; x++)
		{
			this.enemySet[x].setLengthHeight(l,h);
		}
	}

	setQuestion(q,x,y)
	{
		this.question = q;
		this.questionX = x;
		this.questionY = y;
	}

	setEnemyImage(id,image,length,height)
	{
		this.enemySet[id].setCharacterImage(image,length,height);
	}

	startEnemies()
	{
		for (var x = 0; x < this.numberOfEnemies; x++)
		{
			this.enemySet[x].birthCharacter();
		}
		this.endOfQuestion = false;
	}

	setKillOutOfScreen(i)
	{
		this.outOfScreenRange = i;
	}

	setDeathAnimation(deathAnimation)
	{
		for (var x = 0; x < this.numberOfEnemies; x++)
		{
			this.enemySet[x].setDeathAnimation(deathAnimation);
		}
	}

	// take on a true / false value to see if position of enemies needs to be randomized
	setRandom(rand)
	{
		this.random = rand;
	}

	isAnswerAlive()
	{
//		console.log('this function works');
		if (this.enemySet[this.answer].isAlive() != 0)
		{
			return true;
		}
		else {
//			this.endOfQuestion = true;
			return false;
		}
	}

	setIndividualEnemy(id,x,y,length,height,image)
	{
		this.enemySet[id].setXY(x,y);
		this.enemySet[id].setCharacterImage(image);
	}

	drawQuestion()
	{
		image(this.question,this.questionX,this.questionY);
	}

	drawEnemies(myProjManager)
	{
		// 0 - the question is still operational
		// -1 - the enemy has reached the final line
		var returnState = 0;


		if (this.endOfQuestion == false)
		{
			// draw the question
//			this.enemySet[this.numberOfEnemies-1].drawCharacter();


			// draw all enemies
			for (var i = 0; i < this.numberOfEnemies; i++)
			{
				if (this.enemySet[i].isAlive() != -1)
				{
					this.enemySet[i].drawCharacter();
					this.enemySet[i].autoMoveDown();

					if ((this.enemySet[i].getY() > this.outOfScreenRange) && i != this.answer)
					{
						this.enemySet[i].killCharacter();
						console.log('enemy killed');

						// enemy has reached the final line
						returnState = -1;
					}
					else if ((this.enemySet[i].getY() > this.outOfScreenRange) && i == this.answer && this.enemySet[i].isAlive())
					{
						returnState = 1;
						break;
					}
				}
				else if (this.enemySet[i].isAlive() == 0)
				{
					console.log('enemy killed');
				}
				if (myProjManager.hasCollided(this.enemySet[i]) == true)
				{
					this.enemySet[i].killCharacter();
//					console.log(i);
				}
			}
		}
		return returnState;
	}

	endQuestion()
	{
		this.endOfQuestion = true;
	}

	isQuestionFinished()
	{
		return this.endOfQuestion;
	}
}
