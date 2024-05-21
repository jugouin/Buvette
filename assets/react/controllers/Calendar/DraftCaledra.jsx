function prevMonth (){
    currentMonth = currentMonth -1;
    switchMonth();
}

function nextMonth (){
    currentMonth = currentMonth + 1;
    switchMonth();
}

function switchMonth (){
    if(currentMonth < 0  || currentMonth > 11) {
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
}