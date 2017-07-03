javascript: (function () {
    var trList = document.getElementsByTagName("tr");
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var n = weekday[d.getDay()];
    var dayText = "" + n + ", " + monthNames[d.getMonth()] + " " + d.getDate() + nth(d.getDate());
    var today = 0;
    for (var i = 0; i < trList.length; i++) {
        var sTr = trList[i];
        if (sTr.className == "day-split") {
            if (sTr.innerText == dayText) {
                sTr.scrollIntoView();
                today = i;
                break;
            }
        }
    }
    var dayList = [];
    dayList.push(trList[today]);
    var s = today + 1;
    for (var j = s; j < trList.length; j++) {
        var dayTr = trList[j];
        if (dayTr.className == "day-split") {
            break;
        }
        if (dayTr.className != "second-row") {
            dayList.push(dayTr);
        }
    }
    testasd();

    function testasd() {
        for (var a = 1; a < dayList.length; a++) {
            var listDate = dayList[a].cells[0].innerText;
            var kaksoispiste = listDate.split(":");
            if (kaksoispiste[0] == "12") {
                listDate = "0:" + kaksoispiste[1];
            }
            var daa = parseTime(listDate);
            var now = new Date();
            if (daa > now) {
                dayList[a - 1].scrollIntoView();
                return;
            }
        }
        var num = dayList.length;
        dayList[num - 1].scrollIntoView();
    }

    function parseTime(timeString) {
        if (timeString == '') return null;
        var d = new Date();
        var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
        d.setHours(parseInt(time[1], 10) + ((parseInt(time[1], 10) < 12 && time[4]) ? 12 : 0));
        d.setMinutes(parseInt(time[3], 10) || 0);
        d.setSeconds(0, 0);
        return d;
    }

    function nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
})();