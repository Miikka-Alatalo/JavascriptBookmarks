var title = "";
var altTitle = "";
var type = "";
var episodes = "";
var length = "";
var genres = "";
var sAiring = "";
var fAiring = "";
var producers = "";
var rating = "";
var score = "";

var divs = $("div#content table tbody tr td.borderClass div");
for (var i = 0; i < divs.length; i++) {
    var elm = divs[i];
    try {
        var text = elm.children[0].innerText;
        if (text == "English:") {
            if (altTitle == "") {
                altTitle += elm.innerText.split("English: ")[1];
            } else {
                altTitle += " | " + elm.innerText.split("English: ")[1];
            }
        } else if (text == "Type:") {
            type = elm.innerText.split("Type: ")[1];
        } else if (text == "Episodes:") {
            episodes = elm.innerText.split("Episodes: ")[1];
        } else if (text == "Duration:") {
            var lengths = elm.innerText.split("Duration: ")[1].split(" ");
            if (lengths[1] == "hr.") {
                var hours = 0;
                var mins = 0;
                try {
                    hours = parseInt(lengths[0]);
                    mins = parseInt(lengths[2]);
                    length = "" + (hours * 60 + mins);
                } catch (err) { }
            } else {
                length = lengths[0];
            }
        } else if (text == "Genres:") {
            genres = elm.innerText.split("Genres: ")[1];
        } else if (text == "Aired:") {
            try {
                var times = elm.innerText.split("Aired: ")[1].split(" to ");
                var sDate = new Date(times[0]);
                sAiring = sDate.getDate() + "." + (sDate.getMonth() + 1) + "." + sDate.getFullYear()
                if (times.length == 1) {
                    var fDate = new Date(times[0]);
                    fAiring = fDate.getDate() + "." + (fDate.getMonth() + 1) + "." + fDate.getFullYear()
                } else {
                    var fDate = new Date(times[1]);
                    fAiring = fDate.getDate() + "." + (fDate.getMonth() + 1) + "." + fDate.getFullYear()
                }
            } catch (err) { }
        } else if (text == "Producers:") {
            producers = elm.innerText.split("Producers: ")[1];
        } else if (text == "Rating:") {
            rating = elm.innerText.split("Rating: ")[1];
        } else if (text == "Score:") {
            score = elm.children[1].innerText
        }
    } catch (err) {

    }


}

console.log("title: "+title)
console.log("altTitle: "+altTitle)
console.log("type: "+type)
console.log("episodes: "+episodes)
console.log("length: "+length)
console.log("genres: "+genres)
console.log("sAiring: "+sAiring)
console.log("fAiring: "+fAiring)
console.log("producers: "+producers)
console.log("rating: "+rating)
console.log("score: "+score)