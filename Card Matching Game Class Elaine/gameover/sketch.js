var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Go Back to Main menu");
	b1.setTextOver("Go Back to Main menu");
	b1.setButtonLH(203,43);
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
