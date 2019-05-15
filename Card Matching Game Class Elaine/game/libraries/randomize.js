class Randomizer {
	constructor(min,max,numberOfValues,numberOfDupes)
	{
		this.min = min;
		this.max = max;
		this.numberOfValues = numberOfValues;
		this.numberOfDupes = numberOfDupes;
		this.countRandomReturned = 0;

		this.allValues = new Array(numberOfValues);
		this.dupArray = new Array(int(numberOfValues/numberOfDupes));

		this.errorFlag = true;

		// error checking
		if ((numberOfDupes * max) == numberOfValues)
		{

					for (var x = 0; x < this.dupArray.length; x++)
					{
						this.dupArray[x] = 0;
					}

					var counter = 0;

					for (var x = 0; x < numberOfValues; x++)
					{
						var newRandomValue = int(random(this.min,this.max));
						var newRandomFound = false;
						while (newRandomFound == false)
						{
							newRandomFound = true;
							for (var i = 0; i < x; i++)
							{
								if (newRandomValue == this.allValues[i] && this.dupArray[newRandomValue] >= numberOfDupes)
								{
									newRandomFound = false;
									newRandomValue = int(random(this.min,this.max));
									break;
								}
							}
						}
						this.allValues[x] = newRandomValue;
						this.dupArray[newRandomValue]++;
					}
					this.errorFlag = false;
		}
	}

	getRandomValue()
	{
		if (this.errorFlag == false)
		{
			if (this.countRandomReturned <= this.numberOfValues)
			{
				var x = this.allValues[this.countRandomReturned];
				this.countRandomReturned++;
				return x;
			}
			else {
				return -1;
			}
		}
		else {
			console.log('there is a mismatch of total number of values with max & dupes');
			return -2;
		}
	}

}
