var q1;
var q2;
var q3;
var questionManager = new QuestionManager(3);
var questionImage1 = new Array(5);
var questionImage2 = new Array(5);
var questionImage3 = new Array(5);
var currentQuestion = 0;

function setup()
{
	createCanvas(500,500);

	setupQuestion1();
	setupQuestion2();
	setupQuestion3();

	questionManager.addQuestionData(q1);
	questionManager.addQuestionData(q2);
	questionManager.addQuestionData(q3);

}

function draw()
{
	background(255,255,255);

	currentQuestion = questionManager.getCurrentQuestionData();


	if (currentQuestion.isQuestionAnswered() == 0)
	{
		currentQuestion.showQuestion();
	}
	else if (currentQuestion.isQuestionAnswered() == 1)
	{
		fill(0,255,0);
		text("Correct",10,10);
		console.log('correct');
		questionManager.nextQuestion();
	}
	else if (currentQuestion.isQuestionAnswered() == -1)
	{
		fill(255,0,0);
		text("Incorrect",10,10);
		questionManager.nextQuestion();
		console.log('incorrect');
	}

}

function setupQuestion1()
{
	questionImage1[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Question.png');
	questionImage1[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer1.png');
	questionImage1[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer2.png');
	questionImage1[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer3.png');
	questionImage1[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer4.png');

	q1 = new Question(4);
	q1.setCorrectAnswer(4,0,50);
	q1.setQuestion(questionImage1[0]);
	q1.setAnswer(1,questionImage1[1],50,150,239,40);
	q1.setAnswer(2,questionImage1[2],50,200,149,40);
	q1.setAnswer(3,questionImage1[3],50,250,176,40);
	q1.setAnswer(4,questionImage1[4],50,300,184,40);
}

function setupQuestion2()
{
	questionImage2[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Question.png');
	questionImage2[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer1.png');
	questionImage2[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer2.png');
	questionImage2[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer3.png');
	questionImage2[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer4.png');

	q2 = new Question(4);
	q2.setCorrectAnswer(2,0,50);
	q2.setQuestion(questionImage2[0]);
	q2.setAnswer(1,questionImage2[1],50,150,239,40);
	q2.setAnswer(2,questionImage2[2],50,200,149,40);
	q2.setAnswer(3,questionImage2[3],50,250,176,40);
	q2.setAnswer(4,questionImage2[4],50,300,184,40);
}

function setupQuestion3()
{
	questionImage3[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Question.png');
	questionImage3[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer1.png');
	questionImage3[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer2.png');
	questionImage3[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer3.png');
	questionImage3[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer4.png');

	q3 = new Question(4);
	q3.setCorrectAnswer(2,0,50);
	q3.setQuestion(questionImage3[0]);
	q3.setAnswer(1,questionImage3[1],50,150,239,40);
	q3.setAnswer(2,questionImage3[2],50,200,149,40);
	q3.setAnswer(3,questionImage3[3],50,250,176,40);
	q3.setAnswer(4,questionImage3[4],50,300,184,40);
}
