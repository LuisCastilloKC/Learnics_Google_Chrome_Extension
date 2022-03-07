let alarmClock = {

    onHandler : function() {
        chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
                window.close();
    },

    offHandler : function() {
        chrome.alarms.clear("myAlarm");
                window.close();
    }

}