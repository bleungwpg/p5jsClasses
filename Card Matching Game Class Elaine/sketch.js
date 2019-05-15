var bgImage;
var button;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://bleungwpg.github.io/resourcehosting/backgroundimage.jpg');
	button = new Button(0,0,500,500);
}

function draw()
{
	background(125,125,125);
	button.showButton();
	image(bgImage,0,0,500,500);

	if (button.getButtonState() == 1)
	{
		window.open("game/game.html","_self");
	}
}
