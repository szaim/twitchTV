
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
  		$.getJSON(getLink("channels"), function (data) {
  			console.log(data);
			displayChannels(data);
    	});    	

	});
};
var status;
function displayStreams(item) {
	if(item.stream === null) {
		 status = "offline";
	} else {
		 status = "online";
	}
}

var list = $('<li class="list-group-item row m-x-0 p-x-0 "><div class="col-xs-4 avatar-frame"><img alt=""><div class="grad"></div></div><div class="col-xs-8 p-l-2"><h6 class="m-b-0 name-channel"></h6><p class="m-b-0 message"></p></div></li>');
var listGroup = $(".list-group");

function displayChannels(item) {
	var avatar = item.logo;
	var current = list.clone();
	current.addClass(status);
	current.find('img').attr("src", avatar);
	current.find('h6').text(item.display_name);
	current.find('.message').text(item.status);
	if(status === "offline") {
		current.find('.grad').css('background', 'linear-gradient(to bottom, #ef5350, #ef5350)');
	}else {
		current.find('.grad').css('background', 'linear-gradient(to bottom, #cddc39, #cddc39)');

	}
	listGroup.append(current);

}

$(document).ready(function() {
	getTwitch();
	$('.btn').click(function(e) {
		e.preventDefault();
		var status = $(this).attr('id');
		if(status === "offline") {
			$('.online').remove();
		} 
	})
});

