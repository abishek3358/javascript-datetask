function calculate(){
    var monthYear = document.getElementById('month').value;
    var date = Number(document.getElementById('Date').value);
    var hour = Number(document.getElementById('Hour').value) ;
    var mins = Number(document.getElementById('Minutes').value) ;
    var secds = Number(document.getElementById('Seconds').value) ;
    var milliSecs = Number(document.getElementById('Milliseconds').value) ;
    if(monthYear == ''){
        var monthErr = document.getElementById('monthErr');
        monthErr.innerHTML = '*Required';
    }
    if(date > 31){
        var dateErr = document.getElementById('dateErr');
        dateErr.innerHTML = 'Date in between 1 to 31 !';
    }
    else if(date == ''){
        var dateErr = document.getElementById('dateErr');
        dateErr.innerHTML = '*Required';
    }
    if(hour > 24){
        var hourErr = document.getElementById('hourErr');
        hourErr.innerHTML = 'Hour in between 1 to 24 !';
    }
    else if(hour == ''){
        var hourErr = document.getElementById('hourErr');
        hourErr.innerHTML = '*Required';
    }
    if(mins > 59){
        var minsErr = document.getElementById('minutesErr');
        minsErr.innerHTML = 'Minutes in between 1 to 60 !';
    }
    else if(mins == ''){
        var minsErr = document.getElementById('minutesErr');
        minsErr.innerHTML = '*Required';
    }
    if(secds > 59){
        var secdsErr = document.getElementById('secondsErr');
        secdsErr.innerHTML = 'Seconds in between 1 to 60 !';
    }
    else if(secds == ''){
        var secdsErr = document.getElementById('secondsErr');
        secdsErr.innerHTML = '*Required';
    }
    if(milliSecs > 1000){
        var milliSecsErr = document.getElementById('millisecondsErr');
        milliSecsErr.innerHTML = 'Milliseconds in between 1 to 1000 !';
    }
    else if(milliSecs == ''){
        var milliSecsErr = document.getElementById('millisecondsErr');
        milliSecsErr.innerHTML = '*Required';
    }
    var split = monthYear.split('-')
     var splited = split
     console.log(splited)
     
    var finalDate = document.getElementById('finalDate');
    finalDate.innerHTML = new Date(splited[0],splited[1]-1 ,date,hour,mins,secds,milliSecs);
}