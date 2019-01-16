class MultipleChoice {
	constructor(choices,coordinatesX,coordinatesY,correct)
	{
		this.choices = choices;
		this.coordinatesX = coordinatesX;
		this.coordinatesY = coordinatesY;
		this.correct = correct;
		this.length = 200;
		this.height = 50;
		this.spacing = 10;
		this.lock = 0;
		this.answered = false;
	}

	showChoices()
	{
		for (var i = 0; i < this.choices.length; i++)
		{
			image(this.choices[i],this.coordinatesX[i],this.coordinatesY[i]);
		}
	}

	// checks what happens when you click on a button
	// returns 1 if you clicked a button and got it correct
	// returns -1 if you clicked a button and got it wrong
	// returns 0 if you are not clicking a button
	isButtonClicked()
	{
		if (mouseIsPressed && this.lock == 0 && this.answered == false)
		{
			this.answered = true;
			this.lock++;
			for (var i = 0; i < this.choices.length; i++)
			{
				if (mouseX > this.coordinatesX[i] && mouseX < this.coordinatesX[i] + this.length && mouseY > this.coordinatesY[i] && mouseY < this.coordinatesY[i] + this.height)
				{
//					console.log("i:"+i+"  correct: "+this.correct);
					if (i == this.correct)
					{
						return 1;
					}
				}
			}
			return -1;
		}
		else if (mouseIsPressed && this.lock > 0 && this.answered == true)
		{
		}
		else if (!mouseIsPressed && this.lock > 0)
		{
			this.lock = 0;
			this.answered = false;
		}
		return 0;

	}

}
