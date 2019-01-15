class Button {
	constructor(x,y,length,height)
	{
		this.length = length;
		this.height = height;
		this.x = x;
		this.y = y;
		this.fillR = 255;
		this.fillG = 255;
		this.fillB = 255;
		this.textR = 0;
		this.textG = 0;
		this.textB = 0;
		this.textOver = "Hidden";
		this.text = "Hello World";
		this.textLength = 20;
		this.textHeight = 16;
		this.clicked = 0;
	}

	deductHealth(amount)
	{
		this.currentH = this.currentH - amount;
		if (this.currentH <= 0)
		{
			this.currentH = 0;
		}
	}

	// set mouse over text
	setTextOver(t)
	{
		this.textOver = t;
	}

	// set regular text on mouse
	setText(t)
	{
		this.text = t;
	}

	setTextXY(x,y)
	{
		this.x = x;
		this.y = y;
	}


	// set x and y coordinate of health bar
	setButtonXY(x,y)
	{
		this.x = x;
		this.y = y;
	}

	// set length and height of health bar
	setButtonLH(l,h)
	{
		this.length = l;
		this.height = h;
	}

	// set RGB value of the top health bar
	setButtonFill(r,g,b)
	{
		this.fillR = r;
		this.fillG = g;
		this.fillB = b;
	}

	showButton()
	{
		if (mouseX > this.x && mouseX < this.x + this.length &&
			  mouseY > this.y && mouseY < this.y + this.height)
		{
			fill(this.fillR,this.fillG,this.fillB);
			rect(this.x,this.y,this.length,this.height);


			if (mouseIsPressed && this.clicked == 0)
			{
				this.clicked++;
				console.log('mouse Is Pressed');
				fill(this.textR,this.textG,this.textB);
				text("Pressed",(this.x + this.textLength),(this.y+this.textHeight));

			}
			else if (mouseIsPressed && this.clicked > 0)
			{
				this.clicked++;
				console.log('mouse Is Held');
				fill(this.textR,this.textG,this.textB);
				text("Pressed",(this.x + this.textLength),(this.y+this.textHeight));

			}
			else if (!mouseIsPressed && this.clicked > 0) {
				this.clicked = 0;
			}
			else {
				fill(this.textR,this.textG,this.textB);
				text("Released",(this.x + this.textLength),(this.y+this.textHeight));
				console.log('mouse Is released');
			}
		}
		else {
			fill(this.fillR,this.fillG,this.fillB);
			rect(this.x,this.y,this.length,this.height);

			fill(this.textR,this.textG,this.textB);
			text(this.text,this.x+this.textLength,this.y+this.textHeight);
		}
	}

	isButtonClicked()
	{
		return this.clicked;
	}


}
