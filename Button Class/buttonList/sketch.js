var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("index");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,100,25);

}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
