var gplay = require("google-play-scraper");

var APP_ID = 'com.discord';
var addedPromises = 0;
var resolvedPromises = 0;


console.log("** App ID: " + APP_ID);
console.error("** App ID: " + APP_ID);

for (var i = 0; i <= 111; i++) {
	var a = Promise.resolve(gplay.reviews({
	  appId: APP_ID, //change this to change the app
	  throttle: 1, //this limits the number of requests to the Google Play Store (e.g. 10 = 10 requests per second). 10 may be too high if you're planning to do >111 pages.
	  page: i,
	  sort: gplay.sort.NEWEST //can be HELPFULNESS, NEWEST, OR RATING
	}));
	addedPromises++;
	a.then(function(value) {
		resolvedPromises++;
		console.log("** Promise status:: One Promise resolved, resolved promises: " + resolvedPromises + 
		 	", promise left: " + (addedPromises - resolvedPromises) );
		console.error("** Promise status:: One Promise resolved, resolved promises: " + resolvedPromises + 
			", promise left: " + (addedPromises - resolvedPromises) );

		for (var j = 0; j < Object.keys(value).length; j++) {
			console.log(value[j].id + ", "+ value[j].userName + "," + value[j].score + ", " + value[j].date  +", "+value[j].text); 
			//console.log(value[j].text); //value[j].<INSERT TAG> to change what you get from the JSON
		}
	});
	console.log("** Promise status:: total promises: " + addedPromises + ", resolved promises: " + resolvedPromises);
}

// console.log(Object.getOwnPropertyNames(Promise));

/*function addPromise(){

	var a = Promise.resolve(gplay.reviews({
	  appId: 'com.sevenminworkout', //change this to change the app
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
        if (loopCounter < 111) {
            myLoop();
        }
     }, 300);
}

myLoop();
*/
/*

Apps:
com.androbaby.game2048
com.sevenminworkout

com.gaiam.yogastudio

*/




