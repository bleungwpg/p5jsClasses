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
		this.fillOverR = 255;
		this.fillOverG = 255;
		this.fillOverB = 255;
		this.textR = 0;
		this.textG = 0;
		this.textB = 0;
		this.textOver = "Hidden";
		this.text = "Hello World";
		this.textPressed = "Pressed";
		this.textLength = 20;
		this.textHeight = 16;
		this.clicked = 0;
		this.buttonState = 0;
	}

	getButtonState()
	{
		// buttonState = 0; not Pressed
		// buttonState = 1; clicked
		// buttonState = 2; press and hold
		return this.buttonState;
	}

	// set text on button when mouse is over it
	setTextOver(t)
	{
		this.textOver = t;
	}

	// set text on button when nothing is over it
	setText(t)
	{
		this.text = t;
	}

	// set text on button when you press a mouse button on it
	setTextPressed(t)
	{
		this.textPressed = t;
	}

	// sets the x and y coordinate of the text on top of the button
	setTextXY(x,y)
	{
		this.x = x;
		this.y = y;
	}


	// set x and y coordinate of button
	setButtonXY(x,y)
	{
		this.x = x;
		this.y = y;
	}

	// set length and height of button
	setButtonLH(l,h)
	{
		this.length = l;
		this.height = h;
	}

	// set RGB value of the button when mouse is not on top
	setButtonFill(r,g,b)
	{
		this.fillR = r;
		this.fillG = g;
		this.fillB = b;
	}

	// set RGB value of the button when mouse IS ON TOP
	setButtonOverFill(r,g,b)
	{
		this.fillOverR = r;
		this.fillOverG = g;
		this.fillOverB = b;
	}

	// draw the button on the canvas
	// includes tracking if your mouse is over the button
	// or pressing the button
	showButton()
	{
		if (mouseX > this.x && mouseX < this.x + this.length &&
			  mouseY > this.y && mouseY < this.y + this.height)
		{
			fill(this.fillOverR,this.fillOverG,this.fillOverB);
			rect(this.x,this.y,this.length,this.height);


			if (mouseIsPressed && this.clicked == 0)
			{
				this.clicked++;
				fill(this.textR,this.textG,this.textB);
				text(this.textPressed,(this.x + this.textLength),(this.y+this.textHeight));

				this.buttonState = 1;
			}
			else if (mouseIsPressed && this.clicked > 0)
			{
				this.clicked=2;
				fill(this.textR,this.textG,this.textB);
				text(this.textPressed,(this.x + this.textLength),(this.y+this.textHeight));

				this.buttonState = 2;
			}
			else if (!mouseIsPressed && this.clicked > 0) {
				this.clicked = 0;
			}
			else {
				fill(this.textR,this.textG,this.textB);
				text(this.textOver,(this.x + this.textLength),(this.y+this.textHeight));
				this.buttonState = 0;
				this.clicked = 0;
			}
		}
		else {
			fill(this.fillR,this.fillG,this.fillB);
			rect(this.x,this.y,this.length,this.height);

			fill(this.textR,this.textG,this.textB);
			text(this.text,this.x+this.textLength,this.y+this.textHeight);
		}
	}

}
