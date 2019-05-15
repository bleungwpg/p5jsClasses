var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	var img1 = loadImage('https://oliverzhang1.github.io/Y10Design/button_the-math-quiz.png');
	b1.setImage(img1);
	b1.setButtonLH(203,43);
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("buttonList/buttonList.html","_self");
	}
}
