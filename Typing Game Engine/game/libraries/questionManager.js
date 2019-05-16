class QuestionManager {
	constructor()
	{
		this.maxQ = 0;
		this.currentQ = 0;

		this.questions = new Array(this.maxQ);

		this.maxAnswer = null;

	}

	setTypingBoxLH(l,h)
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].setTypingBoxLH(l,h);
		}
	}

	setTickImage(img,l,h)
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].setTickImage(img,l,h);
		}
	}

	setCrossImage(img,l,h)
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].setCrossImage(img,l,h);
		}
	}

	setMarkXY(x,y)
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].setMarkXY(x,y);
		}
	}

	setInputBoxHeight(h)
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].setInputBoxHeight(h);
		}
	}

	// sets the maximum characters the player can type
	setMaxAnswer(a)
	{
		this.maxAnswer = a;
	}

	addQuestion(x,y,l,h,question,answer)
	{
		this.questions[this.maxQ] = new TypingQuestion(x,y,l,h,question,answer);
		if (this.maxAnswer != null)
		{
			this.questions[this.maxQ].setMaxAnswer(this.maxAnswer);
		}


		this.maxQ++;
	}

	getCurrentQuestion()
	{
		return this.currentQ;
	}

	increaseCurrentQ()
	{
		this.currentQ++;
		if (this.currentQ >= this.maxQ)
		{
			this.currentQ = -1;
		}
	}

	showCurrentQuestion()
	{
		if (this.currentQ < this.maxQ && this.currentQ >= 0)
		{
			var temp = this.questions[this.currentQ].showQuestion();
			if (temp == 1)
			{
				this.increaseCurrentQ();

				// correct answer
				return 1;
			}
			else if (temp == 0){
				// unanswered answer return 0
				return 0;
			}
			else {
				// incorrect answer
				this.increaseCurrentQ();
				return -1;
			}
		}
	}

	showResults()
	{
		for (var i = 0; i < this.maxQ; i++)
		{
			this.questions[i].showResult(50,50+i*50);
		}
	}

	endGame()
	{
		this.currentQ = this.maxq;
	}
}
