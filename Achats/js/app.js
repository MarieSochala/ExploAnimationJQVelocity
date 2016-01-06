"use strict";

$(document).ready(function(){

	$('#chatt').on('click',function(){
		$('.add_cat').velocity({translateX:"+=1350px", translateY:"-40%", opacity:"0"}, 1500)
	});
	$('#souriss').on('click',function(){
		$('.add_mouse').velocity({translateX:"+=1350px", translateY:"-340%", opacity:"0"}, 1500)
	});
});


// "slideUp",{ delay: 500, duration: 1500}).velocity({translateX:"1500px"},10000);