/*
 Warning you cannot delete an object in javascript
 Therefore you must be careful how many objects are created
 The destroy function merely prevents additional calculations
 from taking place to prevent lag.
 */

class Collision {
	constructor()
	{
		this.sensitivity = 0;
	}

	collided(x1,y1,r1,x2,y2,r2)
	{
		if (sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) < (r1 + r2 - this.sensitivity))
		{
			return true;
		}
		return false;
	}
}
