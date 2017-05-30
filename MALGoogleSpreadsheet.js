javascript:(function(){ 

var title = $("span[itemprop*='name']")[0].innerText;
var synopsis = $("span[itemprop*='description']")[0].innerText.replace(/(?:\r\n|\r|\n)/g, ' ');
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

var date = new Date();
var sWathing = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

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
                sAiring = sDate.getDate() + "." + (sDate.getMonth() + 1) + "." + sDate.getFullYear();
                if (times.length == 1) {
                    var fDate = new Date(times[0]);
                    fAiring = fDate.getDate() + "." + (fDate.getMonth() + 1) + "." + fDate.getFullYear();
                } else {
                    var fDate = new Date(times[1]);
                    fAiring = fDate.getDate() + "." + (fDate.getMonth() + 1) + "." + fDate.getFullYear();
                }
            } catch (err) { }
        } else if (text == "Producers:") {
            producers = elm.innerText.split("Producers: ")[1];
        } else if (text == "Rating:") {
            rating = elm.innerText.split("Rating: ")[1];
        } else if (text == "Score:") {
            score = elm.children[1].innerText
        }
    } catch (err) {}


}

/*This can be explained with: https://www.youtube.com/watch?v=RSf9aEETnvE*/
var status = '=IF(INDIRECT(ADDRESS(ROW();1))="";"";IF(INDIRECT(ADDRESS(ROW();9))=0;"Not started";IF(MOD(INDIRECT(ADDRESS(ROW();9));INDIRECT(ADDRESS(ROW();8)))=0;"Completed";"Watching")))';
var views = '=IF(ISERR(INT(INDIRECT(ADDRESS(ROW();9))/INDIRECT(ADDRESS(ROW();8))));0;INT(INDIRECT(ADDRESS(ROW();9))/INDIRECT(ADDRESS(ROW();8))))';
var season = '=(INDIRECT(ADDRESS(ROW();8))*INDIRECT(ADDRESS(ROW();10)))';
var seen = '=(INDIRECT(ADDRESS(ROW();9))*INDIRECT(ADDRESS(ROW();10)))';
var seenHour = '=ROUND(INDIRECT(ADDRESS(ROW();12))/60;1)';
var counts = '=INDIRECT(ADDRESS(ROW()-1;COLUMN()))+1';

var textToCopy =
/*a*/    title + "\t"
/*b*/  + altTitle + "\t"
/*c*/  + status + "\t"
/*d*/  + views + "\t"
/*e*/  + counts + "\t"
/*f*/  + counts + "\t"
/*g*/  + type + "\t"
/*h*/  + episodes + "\t"
/*i*/  + "0\t"
/*j*/  + length + "\t"
/*k*/  + season + "\t"
/*l*/  + seen + "\t"
/*m*/  + seenHour + "\t"
/*n*/  + genres + "\t"
/*o*/  + sAiring + "\t"
/*p*/  + fAiring + "\t"
/*q*/  + producers + "\t"
/*r*/  + rating + "\t"
/*s*/  + synopsis + "\t"
/*t*/  + score + "\t"
/*u*/  + "\t"
/*v*/  + sWathing + "\t"
/*w*/  + "\t"
/*x*/  + window.location.href;

if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
    } catch (ex) {
        alert(ex);
    } finally {
        document.body.removeChild(textarea);
    }
}

})();