// Scroll to section functions

  $(document).ready(function(){

  	$("#btnHome").click(function() {
	  	$("html, body").animate({
	  		scrollTop: $("#home").offset().top
	  	}, 1000);
	});

	  $("#btnSkills").click(function() {
	  	$("html, body").animate({
	  		scrollTop: $("#skills").offset().top
	  	}, 1000);
	  });

	  $("#btnContact").click(function() {
	  	$("html, body").animate({
	  		scrollTop: $("#contact").offset().top
	  	}, 1000);
	  });
  });


$(function(){
		$(".text-spec").typed({
			strings: ["Junior Front-End Developer"],
			typeSpeed: 60,
			showCursor:false
		});
	});