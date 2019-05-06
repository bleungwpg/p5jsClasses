var rand;
var y;
var m = 10;
var numbers = new Array(m);

function setup()
{
	createCanvas(1000,600);

	y = 50;

	rand = new Randomizer(0,5,m,2);  // min,max,totalvalue,numberofDupes

	for (var i = 0; i < m; i++)
	{
		console.log(i);
		numbers[i] = rand.getRandomValue();
	}
}

function draw()
{
	background(0,0,0);
	fill(255,255,255);

	for (var i = 0; i < m; i++)
	{
		text(numbers[i],50+i*50,y);
	}
}
