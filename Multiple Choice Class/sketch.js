var question1;
var question2;
var questionX;
var questionY;
var max;
var q1;
var q2;

var canvasID;

function preload()
{
	max = 5;

	questionX = [100,100,100,100,100];
	questionY = [50,100,150,200,250];

	question1 = new Array(max);
	question2 = new Array(max);

	question1[0] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question1_button_answer.png');
	question1[1] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question1_button_answer.png');
	question1[2] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question1_button_answer.png');
	question1[3] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question1_button_answer.png');
	question1[4] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question1_button_answer.png');

	question2[0] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question2_button_answer.png');
	question2[1] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question2_button_answer.png');
	question2[2] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question2_button_answer.png');
	question2[3] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question2_button_answer.png');
	question2[4] = loadImage('https://bleungwpg.github.io/p5jsMCandHealthEngine/images/question2_button_answer.png');

	q1 = new MultipleChoice(question1,questionX,questionY,0);
	q2 = new MultipleChoice(question2,questionX,questionY,1);

}

function setup()
{
	createCanvas(800,600);

	canvasID = 0;
}

function draw()
{
	background(0,0,0);

	if (canvasID == 0)
	{
		q1.showChoices();
		if (q1.isButtonClicked() == 1)
		{
			canvasID = 1;
		}
	}
	else if (canvasID == 1)
	{
		q2.showChoices();
		if (q2.isButtonClicked() == 1)
		{
			canvasID = 2;
		}
	}
	else if (canvasID == 2)
	{
		fill(255,255,255);
		text("Add more code for additional questions here",10,50);
	}

}
