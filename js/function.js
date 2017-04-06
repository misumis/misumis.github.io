  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".nav-bar").addClass("activeMenu");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".nav-bar").removeClass("activeMenu");
    }
});

  // Scroll to section functions

  $(document).ready(function(){

  	$("#btnHome").click(function() {
	  	$("html, body").animate({
	  		scrollTop: $("#home").offset().top
	  	}, 1000);
	});

	  $("#btnAboutMe").click(function() {
	  	$("html, body").animate({
	  		scrollTop: $("#about-me").offset().top
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

