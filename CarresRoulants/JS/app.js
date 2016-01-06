
'use strict';
$(document).ready(function(){
	
	/*$('div').on('click',function(){
		$(this).css("border-radius","50px").velocity({left:'150px', rotateZ:'360deg'},1000).velocity("reverse",1000);
	});*/

$('div').on('click',function(){
	$('#a1').velocity({left:'150px', rotateZ:'360deg', borderRadius: '50px'},1000).velocity("reverse",1000);
	$('#a2').velocity({left:'150px', rotateZ:'360deg', borderRadius: '50px'},800).velocity("reverse",800);
	$('#a3').velocity({left:'150px', rotateZ:'360deg', borderRadius: '50px'},600).velocity("reverse",600);
});
});

/*$('.animation').velocity({
	left:'+=50'
},100);*/

