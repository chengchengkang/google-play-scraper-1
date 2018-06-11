var gplay = require("google-play-scraper");

/*var APP_ID = 'com.discord';
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
			//value[j].<INSERT TAG> to change what you get from the JSON
			console.log(value[j].id + ", "+ value[j].userName + "," + value[j].score + ", " + 
				value[j].date  +", "+value[j].text); 
		}
	});
	console.log("** Promise status:: total promises: " + addedPromises + ", resolved promises: " + resolvedPromises);
}
*/
// console.log(Object.getOwnPropertyNames(Promise));
var totalPromises = 0;
var totalResolvedPromises = 0;


function addPromise(appIdParam, pageNum){
	console.error("** addPromise(): App:"+ appIdParam + ", pageNum: "+ pageNum);
	console.log("** addPromise(): App:"+ appIdParam + ", pageNum: "+ pageNum);
	var a = Promise.resolve(gplay.reviews({
	  appId: appIdParam, //change this to change the app
	  throttle: 1, //this limits the number of requests to the Google Play Store (e.g. 10 = 10 requests per second). 10 may be too high if you're planning to do >111 pages.
	  page: pageNum,
	  sort: gplay.sort.NEWEST //can be HELPFULNESS, NEWEST, OR RATING
	}));
	totalPromises++;
	a.then(function(value) {
		totalResolvedPromises++;
		console.log("**** App ID: "+ appIdParam + ", Page Num: "+ pageNum + 
			", promise resolved, resolved promises: " + totalResolvedPromises + 
		 	", promise left: " + (totalPromises - totalResolvedPromises) );
		console.error("**** App ID: "+ appIdParam + ", Page Num: "+ pageNum + 
			", promise resolved, resolved promises: " + totalResolvedPromises + 
		 	", promise left: " + (totalPromises - totalResolvedPromises) );
		for (var j = 0; j < Object.keys(value).length; j++) {
			//value[j].<INSERT TAG> to change what you get from the JSON
			console.log(value[j].id + ", "+ value[j].userName + "," + value[j].score + ", " +
			    value[j].date  +", "+value[j].text); 
		}
	});
}

function extractAppReviews(appList, appIndex, pageCounter, sleepTime) {
    setTimeout(function () {
        addPromise(appList[appIndex], pageCounter);
        pageCounter++;
        if (pageCounter < 111) {
            extractAppReviews(appList, appIndex, pageCounter, 20000);

        } else if (appIndex < appList.length - 1){
        	console.log("** Extracting next app: " + appList[appIndex + 1] + ", appIndex: " +  (appIndex + 1));
        	console.error("** Extracting next app: " + appList[appIndex + 1] + ", appIndex: " +  (appIndex + 1));
            extractAppReviews(appList, appIndex + 1, 1, 60000);
        }
     }, sleepTime);
}

var appList = [
"com.androbaby.game2048",
"com.sevenminworkout",
"com.idleif.abyssrium",
"com.google.android.projection.gearhead",
"air.com.bitrhymes.bingo",
"com.bitstrips.imoji",
"com.intsig.camscanner",
"com.king.candycrushsaga",
"air.com.mobigrow.canyouescape",
"com.supercell.clashofclans",
"com.colorswitch.switch2",
"com.discord",
"com.lima.doodlejump",
"com.dropbox.android",
"com.evernote",
"com.lightricks.facetune",
"com.spungegames.failybrakes",
"com.king.farmheroessaga",
"com.subatomicstudios.fieldrunners2",
"com.fitbit.FitbitMobile",
"com.flightradar24free",
"com.robtopx.geometryjump",
"com.google.android.apps.chromecast.app",
"com.rockstargames.gtasa",
"com.pronetis.gyrosphere",
"com.nianticproject.ingress",
"com.instagram.android",
"com.glu.kandk",
"com.ketchapp.ketchappbasketball",
"com.linkedin.android",
"com.epicwaronline.ms",
"com.zhiliaoapp.musically",
"com.gameloft.android.ANMP.GloftPOHM",
"com.bigbluebubble.singingmonsters.full",
"com.ea.gp.nbamobile",
"com.istomgames.engine",
"com.miniclip.plagueinc",
"com.pinkfroot.planefinder",
"com.ea.game.pvzfree_row",
"au.com.shiftyjelly.pocketcasts",
"com.bambuna.podcastaddict",
"com.nianticlabs.pokemongo",
"com.quizup.core",
"com.apalon.weatherradar.free",
"com.mg.wildwestredemption",
"com.yodo1.rodeo.safari",
"com.runtastic.android.roadbike.pro",
"com.skoutplus.android",
"com.urbandroid.sleep",
"com.snapchat.android",
"com.spotify.music",
"com.djinnworks.ss16",
"com.kiloo.subwaysurf",
"com.wb.goog.suicidesquad.so",
"com.imangi.templerun",
"com.gaijindistr.theabandoned",
"com.marmalade.golmobile",
"com.weather.Weather",
"com.aspiro.tidal",
"au.com.tinmangames.tobeornottobe",
"com.tumblr",
"tunein.player",
"com.viber.voip",
"org.videolan.vlc",
"slide.watchFrenzy.premium",
"com.tencent.mm",
"com.tmsoft.whitenoise.lite",
"com.twodboy.worldofgoofull",
"com.yelp.android",
"com.gaiam.yogastudio"];

extractAppReviews(appList, 0, 1, 20000);