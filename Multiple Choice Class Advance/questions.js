class Question {
	constructor(numberOfQuestions)
	{
		this.returnValue = 0;
		this.numberOfQuestions = numberOfQuestions;
		this.correct = 0;
		this.waitButtonRelease = -1;
		this.question = null;
		this.qX = 200;
		this.qY = 50;
		this.answers = new Array(numberOfQuestions);
		for (var i = 0; i < numberOfQuestions; i++)
		{
			this.answers[i] = new Button(50,50+i*50,100,50);
		}
	}

	resetQuestion()
	{
		this.returnValue = 0;
		this.waitButtonRelease = -1;
	}

	setAnswer(id,img,x,y,l,h)
	{
		this.answers[id-1].setImage(img);
		this.answers[id-1].setButtonXY(x,y);
		this.answers[id-1].setButtonLH(l,h);
	}

	setQuestion(question,x,y)
	{
		this.question = question;
		this.qX = x;
		this.qY = y;
	}

	setCorrectAnswer(correct)
	{
		this.correct = correct-1;
	}

	showQuestion()
	{
		if (this.question != null)
		{
			image(this.question,this.qX,this.qY);
		}
		else {
			text("This is a sample question",this.qX,this.qY);
		}

		for (var i = 0; i < this.answers.length; i++)
		{
			this.answers[i].showButton();
		}
	}

	isQuestionAnswered()
	{
//		console.log(this.waitButtonRelease);
		if (this.waitButtonRelease == -1)
		{
			for (var i = 0; i < this.answers.length; i++)
			{
				if (this.answers[i].getButtonState() == 1 && i == this.correct && this.waitButtonRelease == -1)
				{
					this.waitButtonRelease = i;
					this.returnValue = 1;
					break;
				}
				else if (this.answers[i].getButtonState() == 1 && i != this.correct && this.waitButtonRelease == -1) {
					this.waitButtonRelease = i;
					this.returnValue = -1;
					break;
				}
			}
		}
		else if (this.answers[this.waitButtonRelease].getButtonState() == 0)
		{
			return this.returnValue;
		}

		return 0;
	}

}
