//var bgImage;
var button;

function setup()
{
	createCanvas(500,500);
//	bgImage = loadImage('https://bleungwpg.github.io/resourcehosting/backgroundimage.jpg');
	button = new Button(0,0,500,500);
	button.setText("Restart!");
	button.setTextOver("Restart!");
}

function draw()
{
	background(125,125,125);
	button.showButton();
//	image(bgImage,0,0,500,500);

	if (button.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
