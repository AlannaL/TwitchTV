$(document).ready(function(){

 //Twitch sample API response in array form
var data =[
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
]

//test if running
console.log(data.length);
console.log(data);

//for each response received i
for (var i=0; i<data.length; i++) {
  
 
 if (data[i].hasOwnProperty("error") !== true) {       //for not closed accounts
    //console.log(getStatus(i));
    if (data[i].stream ===null) {    //for offline accounts
      $('#channel').append('<div class="well row offline"><div class="col-sm-2"><img src="http://placehold.it/250/6b6463/000000/300x300?text=offline" class="img-responsive img-rounded" width="70%"></div><div class="col-sm-4"><h4>' +data[i].display_name+ '</h4></div><div class="col-sm-6 text-center"><h5>Offline</h5></div></div>');
      $('.offline').css("background-color", "#cecdda");
    } else {                          // for online accounts
      var url = ""+data[i]._links.channel+"";
      var logo = data[i].stream.logo;
      $('#channel').append('<div class="well row online"><div class="col-sm-2"><img src=' +logo+ ' class="img-responsive img-rounded" width="70%"></div><div class="col-sm-4"><h4><a href='+url+' target="_blank">' +data[i].stream.display_name+ '</a></h4></div><div class="col-sm-6"><h5>'+data[i].stream.status+'</h5></div></div>');
      $('.online').css("background-color", "#f7fa30");
    } 

  } else { //for closed accounts
    $('#channel').append('<div class="well row closed"><div class="col-sm-2"></div><div class="col-sm-10"><h4>Channel does not exist</h4></div></div>');
    $('.closed').css("background-color", "#fe4629");
  }


} //close for loop for i


$('#on').click(function(){
  $(".online").show();
  $(".offline").hide();
  $(".closed").hide();
})

$('#off').click(function(){
  $(".offline").show();
  $(".online").hide();
  $(".closed").hide();
})

$('#all').click(function(){
  $(".online").show();
  $(".offline").show();
  $(".closed").show();
})


//Don't need the API request
/*
$.ajax({
	type:'GET',
	dataType: 'jsonp',
	url: 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?'
}).done(function(data){
  console.log(data);
}); */ 

})