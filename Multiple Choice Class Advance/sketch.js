// ------- CUSTOM THE CODE BELOW ------
var q1; // question 1 data variable
var q2; // question 2 data variable
var q3; // question 3 data variable
var questionManager = new QuestionManager(3);  // setup 3 questions to be managed
var questionImage1 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage2 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage3 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
// ------- CUSTOM THE CODE ABOVE ------



var currentQuestion = 0;
var delayTimer = new Timer(0,0,0,0);

function setup()
{
	createCanvas(500,500);

	// setup all question data; see function at the bottom
	setupQuestions();


	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(3);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


	// ------- CUSTOM THE CODE BELOW ------
	// add all questions to the question manager; as you add more questions
	// you will need to add more to the question manager
	questionManager.addQuestionData(q1);
	questionManager.addQuestionData(q2);
	questionManager.addQuestionData(q3);

}

function draw()
{
	background(255,255,255);

	// go to a new .html file when last question is complete
	if (questionManager.isLastQuestion() == true)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("mainmenu/mainmenu.html","_self");
	}


	currentQuestion = questionManager.getCurrentQuestionData();


	if (currentQuestion.isQuestionAnswered() == 0)
	{
		// show the current question when no button has been pressed
		currentQuestion.showQuestion();
	}
	else if (currentQuestion.isQuestionAnswered() == 1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(0,255,0);
		text("Correct",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}
	else if (currentQuestion.isQuestionAnswered() == -1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(255,0,0);
		text("Incorrect",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}




	// -------- START ---------- DO NOT TOUCH THIS CODE -----------
	// initiate a delay timer when a question is answered
	if (currentQuestion.isQuestionAnswered() != 0)
	{
		if (delayTimer.isTimerFinished() == false)
		{
			delayTimer.startTimer();
		}
		else {
			questionManager.nextQuestion();
			delayTimer.resetTimer();
		}
		// -------- END ---------- DO NOT TOUCH THIS CODE -----------
	}


}

function setupQuestions()
{
	// START ------- CUSTOM THE CODE BELOW -----------------------------------------
	// setup question 1 below
	questionImage1[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Question.png');
	questionImage1[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer1.png');
	questionImage1[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer2.png');
	questionImage1[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer3.png');
	questionImage1[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q1Answer4.png');
	q1 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q1.setCorrectAnswer(4,0,50);  // set the correct answer in the 1st parameter; in this case choice 4
	q1.setQuestion(questionImage1[0]);
	q1.setAnswer(1,questionImage1[1],50,150,239,40);
	q1.setAnswer(2,questionImage1[2],50,200,149,40);
	q1.setAnswer(3,questionImage1[3],50,250,176,40);
	q1.setAnswer(4,questionImage1[4],50,300,184,40);



	// setup question 2 below
	questionImage2[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Question.png');
	questionImage2[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer1.png');
	questionImage2[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer2.png');
	questionImage2[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer3.png');
	questionImage2[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q2Answer4.png');
	q2 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q2.setCorrectAnswer(2,0,50);  // set the correct answer in the 1st parameter; in this case choice 2
	q2.setQuestion(questionImage2[0]);
	q2.setAnswer(1,questionImage2[1],50,150,239,40);
	q2.setAnswer(2,questionImage2[2],50,200,149,40);
	q2.setAnswer(3,questionImage2[3],50,250,176,40);
	q2.setAnswer(4,questionImage2[4],50,300,184,40);


	// setup question 3 below
	questionImage3[0] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Question.png');
	questionImage3[1] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer1.png');
	questionImage3[2] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer2.png');
	questionImage3[3] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer3.png');
	questionImage3[4] = loadImage('https://bleungwpg.github.io/resourcehosting/q3Answer4.png');
	q3 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q3.setCorrectAnswer(2,0,50); // set the correct answer in the 1st parameter; in this case choice 2
	q3.setQuestion(questionImage3[0]);
	q3.setAnswer(1,questionImage3[1],50,150,239,40);
	q3.setAnswer(2,questionImage3[2],50,200,149,40);
	q3.setAnswer(3,questionImage3[3],50,250,176,40);
	q3.setAnswer(4,questionImage3[4],50,300,184,40);
	// END ------- CUSTOM THE CODE ABOVE -----------------------------------------

}
