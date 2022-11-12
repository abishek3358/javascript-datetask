function dateCalculator() {
    var date1 = document.getElementById("input1").value;
    var countNum = document.getElementById("input2").value;
    if(date1 == ''){
        alert('Empty inputs not allowed!');
    }
    else if(countNum == ''){
        alert('Please enter days!');
    }
    else{
        var date = new Date(date1);
        //converting date into  milliseconds
        var mileSec = date.getTime();
        //converting number into  total milliseconds
        var numMillisec = Number(countNum) * 24 * 60 * 60 * 1000;
        //Add date
        var addDate = mileSec + numMillisec;
        var newDate = new Date(addDate);
        var addDateNew = document.getElementById("addvalue");
        addDateNew.innerHTML = "Days added new date is <b>" + newDate +'.</b>';
        //subraction date
        var minustesDate = mileSec - numMillisec;
        var subDate = new Date(minustesDate);
        var subDateNew = document.getElementById("subvalue");
        subDateNew.innerHTML = "Days subracted new date is <b>" + subDate +'.</b>';
    }

}