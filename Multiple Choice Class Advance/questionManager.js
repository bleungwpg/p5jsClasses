class QuestionManager {
	constructor(maxQuestions)
	{
		this.maxQuestions = maxQuestions;
		this.maxQuestionCounter = 0;
		this.currentQuestion = 0;
		this.questionData = new Array(maxQuestions);
	}

	getCurrentQuestionNumber()
	{
		return this.currentQuestion;
	}

	addQuestionData(data)
	{
		this.questionData[this.maxQuestionCounter] = data;
		this.maxQuestionCounter++;
	}

	getCurrentQuestionData()
	{
		return this.questionData[this.currentQuestion];
	}

	nextQuestion()
	{
		this.currentQuestion++;
	}

	isLastQuestion()
	{
		if (this.currentQuestion == this.maxQuestions)
		{
			return true;
		}
		return false;
	}

}
