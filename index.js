
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];

function getTwitch(){
	channels.forEach(function(channel) {
		function getLink(type, name) { 
			return link = "https://wind-bow.gomix.me/twitch-api/"+type+"/"+channel+"?callback=?";
		};
  		$.getJSON(getLink("streams"), function (data) {
			console.log(data);  
    	});
	});

};

$(document).ready(function() {
	getTwitch();
});

