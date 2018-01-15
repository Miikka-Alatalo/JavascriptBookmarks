/* archive */
javascript:(function(){var inputstringit = window.location.href;var stringienpaksuus = inputstringit.indexOf(".tumblr.com/");if(stringienpaksuus == -1){return;} else {stringienpaksuus = stringienpaksuus + 12;}var kaytetytstringit = inputstringit.substring(0, stringienpaksuus)+"archive";window.location.href = kaytetytstringit;})();

/* video archive */
javascript:(function(){ var inputstringit = window.location.href; var stringienpaksuus = inputstringit.indexOf(".tumblr.com/"); if(stringienpaksuus == -1){return;} else {stringienpaksuus = stringienpaksuus + 12;} var kaytetytstringit = inputstringit.substring(0, stringienpaksuus)+"archive/filter-by/video"; window.location.href = kaytetytstringit;})();

/* flick-away */
javascript:(function(){ var list = document.getElementsByClassName("post_thumbnail_container"); for(var i = 0; i < list.length; i++) { if(list[i].style.backgroundImage.toString().includes("flickr")){ list[i].style.backgroundImage = ""; list[i].style.backgroundColor = "#FFFFFF"; } } })();

/* image */
javascript:(function(){var inputstringit = window.location.href;var stringienpaksuus = inputstringit.indexOf(".tumblr.com/post");if(stringienpaksuus == -1){return;} else {var splits = inputstringit.split(/\//);var count = splits.length-1;if(count === 4){window.location.href = inputstringit.replace("post", "image");} else {var asd = splits[0]+"/"+splits[1]+"/"+splits[2]+"/image/"+splits[4];window.location.href = asd;}}})();