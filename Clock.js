window.onload = setInterval(clock,1000); //upon the window loading the clock refreshes every millisecond

function clock() {

	// date
	var d = new Date(); //assigning the Date to "d"
	var date = d.getDate(); //assigning the actual date

	// month
	var month = d.getMonth(); //allows the month to be grabbed
	var realmonth =["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]; //allows a list to give to the current month
	month = realmonth[month]; //actually assigns the correct current month

	// year
	var year = d.getFullYear(); //uhh.. gets the year.

	// day
	var day = d.getDay(); //allows the day to be grabbed
	var realday =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]; //allows a list to give the current day
	day = realday[day] //actually assigns the correct day

	//it's clock time now
	var hour = d.getHours(); //gets current hour info
	var minute = d.getMinutes(); //gets current minute info
	var second = d.getSeconds(); //gets current second info

	//lets put the suffixes to each of the dates as necessary
	date = (date == 1 || date == 21 || date == 31) ? date + "st".sup() : date; //this adds the suffix of 1st
	date = (date == 2 || date == 22) ? date + "nd".sup() : date; //this adds the suffix of 2nd
	date = (date == 3 || date == 23) ? date + "rd".sup() : date; //this adds the suffix of 3rd
	date = (date > 3 || date < 21 || date > 23 || date < 31) ? date + "th".sup() : date; //this adds the suffix of th to everything else.

	hour = ( hour < 10 ? "0" : "" ) + hour; //supposedly pads on a 0 to the beginning of the hour if the hour value is less than 10
	minute = ( minute < 10 ? "0" : "" ) + minute; //does the above
	second = ( second < 10 ? "0" : "" ) + second; //also does the above

	var timeOfDay = ( hour < 12 ) ? "AM" : "PM"; //assigns the AM or PM value depending if the value of hour is below 12 or noon.
	hour = ( hour > 12 ) ? hour - 12 : hour; //allows the hour to be displayed as a regular 12 hour time
	militaryHours = d.getHours(); //assigns the military hours as the actual value
	hour = ( hour == 0 ) ? 12 : hour; //allows the hour to be displayed as 12 rather than 0

/*	twelveHour = hour+" : "+minute+" : "+second+" "+timeOfDay; //gives the value to be displayed in a 12 hour clock
	twentyfourHour = militaryHours+" : "+minute+" : "+second+" "+timeOfDay; //gives the value to be displayed in a 24 hour clock
*/
	// now we're formatting and assigning the time
	document.getElementById("date").innerHTML=day+", "+month+" "+date+" "+year; //displays the date correctly

	if (isMilitaryTime === false) {
		document.getElementById("hours").innerHTML=hour; //if the military toggle isn't selected, it displays the time per 12 hours
	} else {
		document.getElementById("hours").innerHTML=militaryHours; //if the military toggle is selected, it displays the time per 24 hours
	}
	document.getElementById("minutes").innerHTML=minute;
	document.getElementById("seconds").innerHTML=second;
	document.getElementById("am-pm").innerHTML=timeOfDay;

}
	
	let isMilitaryTime = true;
	document.getElementById("mytimeswitch").addEventListener("click", function(){
		if (isMilitaryTime === false) {
			isMilitaryTime = true; //given that toggle is set to be military time, this allows it to be toggled upon a click
		}
		else if (isMilitaryTime === true) {
			isMilitaryTime = false; //the opposite of the above statement
		}
	
	})