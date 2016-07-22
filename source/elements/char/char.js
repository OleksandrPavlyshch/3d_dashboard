'use strict';
var w = 200
	, h = 100
	, minPoints = 5
	, maxPoints = 8;

var createLinePath = function () {
	var pointsAmount = getRandomNumber(minPoints, maxPoints);
	var points = [];


	for(var i = 0; i < pointsAmount; i++){
		var point = {};
		var currentX;

		switch (i) {
			case 0:
				point.x = getRandomNumber(0, 10);
				point.y = getRandomNumber(0, h);
				break;
			case (pointsAmount - 1):
				point.x = w;
				point.y = getRandomNumber(0, h);
				break;
			default:
				point.x = currentX = getRandomNumber(currentX || 10, w-20);
				point.y = getRandomNumber(0, h);
				break;
		}

		points.push(point);
	}


	return(points);
};

var getRandomNumber = function (min, max) {
		return Math.round(Math.random() * (max - min) + min);
};


console.log(createLinePath());