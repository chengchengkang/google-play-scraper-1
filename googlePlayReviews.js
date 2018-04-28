var gplay = require("google-play-scraper");
function addPromise(){

	var a = Promise.resolve(gplay.reviews({
	  appId: 'com.facebook.katana', //change this to change the app
	  throttle: 1, //this limits the number of requests to the Google Play Store (e.g. 10 = 10 requests per second). 10 may be too high if you're planning to do >111 pages.
	  page: loopCounter,
	  sort: gplay.sort.NEWEST //can be HELPFULNESS, NEWEST, OR RATING
	}));
	
	a.then(function(value) {
		for (var j = 0; j < Object.keys(value).length; j++) {
			console.log(loopCounter+ ", " + value[j].id + ", "+ value[j].userName + "," + value[j].score + ", " + value[j].date  +", "+value[j].text); //value[j].<INSERT TAG> to change what you get from the JSON
		}
	});
}

var loopCounter = 1; 

function myLoop () {
    setTimeout(function () {
        addPromise(); 
        loopCounter++;
        if (loopCounter < 500) {
            myLoop();
        }
     }, 450);
}

myLoop();

/*
for (var i = 0; i <= 100; i++) {
	// Promise.
	setTimeout(function(){}, 300);
	var a = Promise.resolve(gplay.reviews({
	  appId: 'com.facebook.katana', //change this to change the app
	  throttle: 1, //this limits the number of requests to the Google Play Store (e.g. 10 = 10 requests per second). 10 may be too high if you're planning to do >111 pages.
	  page: i,
	  sort: gplay.sort.HELPFULNESS //can be HELPFULNESS, NEWEST, OR RATING
	}));
	
	a.then(function(value) {
		for (var j = 0; j < Object.keys(value).length; j++) {
			console.log(value[j].text); //value[j].<INSERT TAG> to change what you get from the JSON
		}
	});
}*/


