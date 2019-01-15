let h1 = new HealthBar(100,100);
var buttonDown;

function setup()
{
	createCanvas(500,500);

	buttonDown = false;
}

function draw()
{
	background(255,255,255);
	h1.showHealthBar();

	deductHealthButton();
}

function deductHealthButton()
{
	var x = 50;
	var y = 50;
	var l = 100;
	var h = 25;



	if (mouseX > x && mouseX < x+l && mouseY > y && mouseY < y+h && mouseIsPressed && buttonDown == false)
	{
		fill(255,255,255);
		rect(x,y,l,h);
		h1.deductHealth(10);
		buttonDown = true;
	}
	else
	{
		fill(50,50,50);
		rect(x,y,l,h);
	}

}

function mouseReleased()
{
	if (buttonDown)
	{
		buttonDown = false;
	}
}
