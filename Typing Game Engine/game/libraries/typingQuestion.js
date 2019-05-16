class TypingQuestion {
	constructor(x,y,l,h,question,answer) {
		this.heightConstant = 83;
		this.x = x;
		this.y = y;
		this.l = l;
		this.h = h;
		this.question = question;
		this.answer = answer;

		this.typingBox = createInput('');
		this.typingBox.position(this.x+this.l+10,this.y);
		this.typingBox.hide();
		this.typingBoxLength = 100;
		this.typingBoxHeight = 25;

		this.maxAnswer = null;

		this.correct = false;
		this.tick = null;
		this.cross = null;
		this.markl = null;
		this.markh = null;
		this.markX = 140;
		this.markY = 17;
	}

	setTickImage(t,l,h)
	{
		this.tick = t;
		this.markl = l;
		this.markh = h;

	}

	setCrossImage(c,l,h)
	{
		this.cross = c;
		this.markl = l;
		this.markh = h;
	}

	setTypingBoxLH(l,h)
	{
		this.typingBoxLength = l;
		this.typingBoxHeight = h;
	}

	setMarkXY(x,y)
	{
		this.markX = x;
		this.markY = y;
	}

	setInputBoxHeight(h)
	{
		this.heightConstant = h;
	}

	setMaxAnswer(a)
	{
		this.maxAnswer = a;
	}

	showQuestion()
	{
		image(this.question,this.x,this.y,this.l,this.h);
		// setup textbox
		this.typingBox.position(this.x+this.l+10,this.heightConstant+this.y);
		this.typingBox.size(this.typingBoxLength,this.typingBoxHeight);
		this.typingBox.show();
		this.typingBox.elt.focus;

		if (this.maxAnswer == null)
		{
			if (this.typingBox.value() == this.answer)
			{
//				this.typingBox.value("");
				this.typingBox.hide();
				this.correct = true;
				// correct answer return 1
				return 1;
			}
			else {
				// unanswered answer return 0
				return 0;
			}
		}
		else
		{
			var t = this.typingBox.value().length;
			if (t >= this.maxAnswer)
			{
				if (this.typingBox.value() == this.answer)
				{
//					this.typingBox.value("");
					this.typingBox.hide();
					this.correct = true;
					// correct answer return 1
					return 1;
				}
				else {
					// incorect answer return 0
//					this.typingBox.value("");
					this.typingBox.hide();
					return -1;
				}
			}
			else {
				// unanswered
				return 0;
			}

		}

	}

	showResult(x,y)
	{
		// show question
		image(this.question,x,y,this.l,this.h);

		// show answer
		this.typingBox.position(x+this.l+10,this.heightConstant+y);
		this.typingBox.size(this.typingBoxLength,this.typingBoxHeight);
		this.typingBox.show();

		// show mark
		if (this.correct == true)
		{
			if (this.tick != null)
			{
				image(this.tick,x+this.l+this.markX,this.markY+y,this.markl,this.markh);
			}
			else {
				fill(0,255,0);
				text("correct",x+this.l+this.markX,y+this.markY);
				fill(255,255,255);
			}
		}
		else {
			if (this.cross != null)
			{
				image(this.cross,x+this.l+this.markX,this.markY+y,this.markl,this.markh);
			}
			else {
				fill(255,0,0);
				text("incorrect",x+this.l+this.markX,y+this.markY);
				fill(255,255,255);
			}
		}
	}
}
