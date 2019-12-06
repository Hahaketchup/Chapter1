window.onload = setInterval(clock,1000);

function clock() {
	// date
	var d = new Date();
	var date = d.getDate();
	// month
	var month = d.getMonth();
	var realmonth =["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

	month = realmonth[month];
	// year
	var year = d.getFullYear();
	// day
	var day = d.getDay();
	var realday =["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];

	day = realday[day]

	//it's clock time now

	var hour = d.getHours();

	var minute = d.getMinutes();

	var second = d.getSeconds();

	// now we're formatting and assigning the time

	document.getElementById("time").innerHTML=hour+" : "+minute+" : "+second;

	document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
}

