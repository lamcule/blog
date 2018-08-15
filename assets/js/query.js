
$(document).ready(function() {
	$(".jsPortfolio").click(function() {
		var t = $(".jsPort").position().top;
		$('html,body').stop().animate({scrollTop: t},500);
	});
	$(".jsTeamBtn").click(function() {
		var t = $(".jsTeam").position().top;
		$('html,body').stop().animate({scrollTop: t},500);
	});
	$(".jsContactBtn").click(function() {
		var t = $(".jsContact").position().top;
		$('html,body').stop().animate({scrollTop: t},500);
	});
	$(".jsServiceBtn").click(function() {
		var t = $(".jsService").position().top;
		$('html,body').stop().animate({scrollTop: t},500);
	});
});