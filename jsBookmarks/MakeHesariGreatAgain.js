var list = document.getElementsByTagName("a");
var toBeRemoved = [];
for(var i=0;i<list.length;i++) {
    var mielipidelist = list[i].getElementsByClassName("teaser-category");
    if (list[i].getElementsByClassName("column-icon").length > 0 || 
    list[i].getElementsByClassName("premium-subscribers-note").length > 0 || 
    list[i].href.includes("/nyt/") ||
    (mielipidelist[0] && mielipidelist[0].innerHTML.includes("Mielipide"))){ 
        toBeRemoved.push(list[i])
    }
}
for(var j=toBeRemoved.length-1;j>-1;j--){
    toBeRemoved[j].remove();
}