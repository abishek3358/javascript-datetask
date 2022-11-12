function dateCalculate() {
    var A = String(document.getElementById('input1').value);
    var B = String(document.getElementById('input2').value);
    if(A,B == ''){
        alert('Empty inputs not allowed!');
    }
    else{
        const dt_date1 = new Date(A);
        const dt_date2 = new Date(B);
        //converting Date into an mileseconds from 1st jan 1970;
        const date1_time_stamp = dt_date1.getTime();
        const date2_time_stamp = dt_date2.getTime();
        let calc;
        if (date1_time_stamp > date2_time_stamp) {
            calc = new Date(date1_time_stamp - date2_time_stamp);
        } else {
            calc = new Date(date2_time_stamp - date1_time_stamp);
        }
        //converting mileseconds into an date format;
        console.log(calc)
        const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
        console.log(calcFormatTmp)
        const calcFormat = calcFormatTmp.split("-");
        console.log(calcFormat)
        const days_passed = Number(Math.abs(calcFormat[0]) - 1);
        const months_passed = Number(Math.abs(calcFormat[1]) -1);
        const years_passed = Number(Math.abs(calcFormat[2]) - 1970);
        console.log(days_passed,months_passed,years_passed)
    
        //Total answers;
        const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
        const total_mileseconds = total_days * 24 * 60 * 60 * 1000;
        const total_secs = total_days * 24 * 60 * 60;
        const total_mins = total_days * 24 * 60;
        const total_hours = total_days * 24;
        const total_weeks = (total_days >= 7) ? total_days / 7 : 0;
    
        //Singular or phlural text finding;
        const yrsTxt = ["year", "years"];
        const mnthsTxt = ["month", "months"];
        const daysTxt = ["day", "days"];
        const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
            years_passed + ' ' + yrsTxt[1] + ' ' : '') +
            ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
                months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
            ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
                days_passed + ' ' + daysTxt[1] : '');
    
        //Data binding
        var noOfdays = document.getElementById('addvalue')
        noOfdays.innerHTML = '<p>The total number of days in between those two dates is <b>' + Math.round(total_days) + '</b>.</p> '
            + '<p>The total number of weeks in between those two dates is <b>' + Math.round(total_weeks) + '</b>.</p> '
            + '<p>The total number of hours in between those two dates is <b>' + Math.round(total_hours) + '</b>.</p> '
            + '<p>The total number of minutes in between those two dates is <b>' + Math.round(total_mins) + '</b>.</p> '
            + '<p>The total number of seconds in between those two dates is <b>' + Math.round(total_secs) + ' </b>.</p>'
            + '<p>The total number of milliseconds in between those two dates is <b>' + Math.round(total_mileseconds) + ' </b>.</p>'
            + '<p>The total number of days months and years in between those two dates is <b>' + result.trim() + '</b>.</p>';

    }
   
   
}