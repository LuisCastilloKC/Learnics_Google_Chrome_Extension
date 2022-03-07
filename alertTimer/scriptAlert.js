let alarmClock = {

    onHandler : function() {
        chrome.alarms.create("myAlarm", {delayInMinutes: 1.0, periodInMinutes: 2.0} );
                window.close();
    },

    offHandler : function() {
        chrome.alarms.clear("myAlarm");
                window.close();
    },

    setup: function() {
        let alarmOn = document.getElementById('alarmOn');
        alarmOn.addEventListener('click',  alarmClock.onHandler );
        let alarmOff = document.getElementById('alarmOff');
        alarmOff.addEventListener('click',  alarmClock.offHandler );
    }
}

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});