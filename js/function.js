
//Loader funciton
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1800);
 	
 	setTimeout(function(){
 		$(".text-spec").typed({
		strings: ["Junior Front-End Developer"],
		typeSpeed: 60,
		showCursor:false
	});
 	}, 2200);
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
	  		scrollTop: $("#aboutme").offset().top
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



$(document).ready(function(){
	$("[href='#" + 'home' + "']").addClass('active');
  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('.area');
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection
    
    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){

      var divPosition = $(this).offset().top;
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);
      }
      var id = $currentSection.attr('id');
   	 $('a').removeClass('active');
   	 $("[href='#" + id + "']").addClass('active');
      
    })

  });
});