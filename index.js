
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];

function getTwitch(){
	channels.forEach(function(channel) {
		function getLink(type, name) { 
			return link = "https://wind-bow.gomix.me/twitch-api/"+type+"/"+channel+"?callback=?";
		};
  		$.getJSON(getLink("streams"), function (data) {
			console.log(data); 
			displayStreams(data); 
    	});
    	
	});
};

function displayStreams(item) {
	var status;
	switch(item.stream) {
		case null:
		status = "offline";
		console.log(status);
		break;
		default:
		status = "Online";
		console.log(status);
	}
}

$(document).ready(function() {
	getTwitch();
});

