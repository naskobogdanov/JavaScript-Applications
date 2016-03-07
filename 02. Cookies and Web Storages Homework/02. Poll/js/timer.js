var minutesCount = 5;
countDown(minutesCount);
var delay = 1000;

function countDown(minutesCount) {
    var seconds = Math.round(minutesCount * 60);
    seconds--;
    var remMins = Math.floor(seconds / 60);
    var remSeconds = seconds - remMins*60;

    function n(n){
        return n > 9 ? "" + n: "0" + n;
    }
    $('#counter').text('Remaining time: ' + remMins +':'+ n(remSeconds));
    if (seconds == 0) {
        $('#counter').text('0:00');
    }
    if (seconds > 0) {
        setTimeout(function(){ countDown(seconds/60); }, delay);
    }
}