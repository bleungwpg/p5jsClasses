let t1 = new Timer(10,10,300,25);
let t2 = new Timer(10,100,300,25);


function setup()
{
	createCanvas(700,500);
	frameRate(30);	
}

function draw()
{
	background(255,0,0)



	t1.drawTimer();

	t2.setTimerColor(0,255,0);
	t2.drawTimer();
	t2.countUp();

	button();

	t1.startTimer();
	t2.startTimer();
	t2.textOff();
	t2.setMaxTime(10);

    
}

function button()
{
	fill(0,0,255);
	rect(100,150,100,50);

	fill(255,255,255);
	text("Start Timer",120,175);

	if (mouseX > 100 && mouseX < 100+100 && mouseY > 150 && mouseY < 150+50 && mouseIsPressed)
	{
		t1.resetTimer();
		t2.resetTimer();
	}
}