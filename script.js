
var windowLocation          = location.hostname;
var windowLocationWorldNews = location.hostname + '/r/worldnews';

if(windowLocation.search("www.walla.co.il") > -1) {
    var lists = document.getElementsByTagName("h3");

    for(var i = 0; i < lists.length; i++ ) {
        //lists[i] = lists[i] + ":(";
        if (typeof lists[i].getElementsByTagName("span")[0] != 'undefined') {
            lists[i].getElementsByTagName("span")[0].innerHTML = lists[i].getElementsByTagName("span")[0].innerHTML + ' :(';
            //text = text + ' :(';
        }
    }
} else if(windowLocationWorldNews.search("www.reddit.com/r/worldnews") > -1) {
    var worldNewsTitles      = document.getElementsByClassName('title may-blank');

    for(var ii = 0; ii < worldNewsTitles.length; ii++) {
        worldNewsTitles[ii].innerHTML = worldNewsTitles[ii].innerHTML + '<span style="color:black; text-decoration: none; font-weight: 800" > :( </span>';
    }
} else if(windowLocation.search("www.bbc.com") > -1) {
    var bbcTitles = document.getElementsByClassName('media__link');
    for(var iii = 0; iii < bbcTitles.length; iii++) {
        bbcTitles[iii].innerHTML = bbcTitles[iii].innerHTML + ' :(';
    }
}
