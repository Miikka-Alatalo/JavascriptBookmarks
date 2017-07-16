javascript: (function () {
    var asd = document.getElementsByClassName("entry");
    var dsa = asd.length;
    for (i = 0; i < dsa; i++) {
        if(asd[i].querySelectorAll('a.title')[0].href.includes("imgur.com/a/"))
            asd[i].style.backgroundColor = "pink";
    }
})();