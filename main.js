$(document).ready(function(){
  var settings = {
 "async": true,
 "crossDomain": true,
 "url": "https://www.reddit.com/r/Showerthoughts/new.json",
 "method": "GET",
 "headers": {
   "cache-control": "no-cache",
   "postman-token": "52c8bf40-feec-f7b5-a4fc-38f8632efe98"
 }
}

$.ajax(settings).done(function (response) {
 console.log(response);
});
});
