var list = document.getElementsByTagName("a");
var toBeRemoved = [];
for(var i=0;i<list.length;i++) {
    var teaserList = list[i].getElementsByClassName("teaser-category");
    var storyList = list[i].getElementsByClassName("storylogo");
    if (list[i].getElementsByClassName("column-icon").length > 0 ||
    list[i].getElementsByClassName("premium-subscribers-note").length > 0 ||
    list[i].href.includes("/nyt/") ||
    (storyList[0] && storyList[0].innerHTML.includes("Kommentti")) ||
    (teaserList[0] && teaserList[0].innerHTML.includes("Mielipide"))) {
      toBeRemoved.push(list[i])
    }
}
for(var j=toBeRemoved.length-1;j>-1;j--){
    toBeRemoved[j].remove();
}
