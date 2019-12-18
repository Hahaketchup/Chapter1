let timerIntervalId = setInterval(clock,1000); //upon the window loading the clock refreshes every millisecond
console.log(timerIntervalId);

function clock() {

	// date
	var d = new Date(); //assigning the Date to "d"
	var date = d.getDate(); //assigning the actual date


	var months =["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]; //allows a list to give to the current month
	const month = months[d.getMonth()]; //actually assigns the correct current month

	
	var year = d.getFullYear(); //uhh.. gets the year.


	var days =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]; //allows a list to give the current day
	const day = days[d.getDay()] //actually assigns the correct day


	let formattedDate = formatDate(d.getDate());

	let hour = formatTime(d.getHours());
	let minute = formatTime(d.getMinutes());
	let second = formatTime(d.getSeconds());

	var timeOfDay = ( hour < 12 ) ? "AM" : "PM"; //assigns the AM or PM value depending if the value of hour is below 12 or noon.
	
	const formattedHour = formatHours(hour);

	// now we're formatting and assigning the time
	document.getElementById("date").innerHTML = day+", "+month+" "+formattedDate+" "+year; //displays the date correctly

	document.getElementById("hours").innerHTML = formattedHour;
	document.getElementById("minutes").innerHTML = minute; //displays minutes on the page
	document.getElementById("seconds").innerHTML = second; //displays displays seconds on the page
	document.getElementById("am-pm").innerHTML = timeOfDay; //displays either AM or PM
}
	
	function formatHours(hours) {
		if (isMilitaryTime === true) {
			return ( hours == 0 ) ? 12 : hours;
		} else {
			return ( hours > 12 ) ? hours - 12 : hours;
		}
	}

	function formatTime(value) {
		if (value < 10) {
			return "0" + value;
		}	else {
			return "" + value;
		}
	}

	function formatDate(date) {
		if (date == 1 || date == 21 || date == 31) {
			return date + "st".sup();
		}	
		if (date == 2 || date == 22) {
			return date + "nd".sup();
		}
		if (date == 3 || date == 23) {
			return date + "rd".sup();
		}
		if (date > 3 || date < 21 || date > 23 || date < 31) {
			return date + "th".sup();
		}

		return date;
	}

let isMilitaryTime = true;
document.getElementById("mytimeswitch").addEventListener("click", function(){
	clearInterval(timerIntervalId);
	if (isMilitaryTime === false) {
		isMilitaryTime = true; //given that toggle is set to be military time, this allows it to be toggled upon a click
	}
	else if (isMilitaryTime === true) {
		isMilitaryTime = false; //the opposite of the above statement
	}
	timerIntervalId = setInterval(clock,1000);
	clock();
});

	clock();