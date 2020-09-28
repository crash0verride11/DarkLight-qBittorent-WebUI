// JavaScript Document
function mobTest(){
	"use strict";
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
 ){
	return true;
  }
}

function mobAdjust(){
	"use strict";
	var result = mobTest();
	if( result = true){
		var metaTag=document.createElement('meta');
		metaTag.name = "viewport";
		metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
		document.getElementsByTagName('head')[0].appendChild(metaTag);  
	}
}
mobAdjust();
