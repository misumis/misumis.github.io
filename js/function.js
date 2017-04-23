
//Loader funciton 
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1500); //1800
 	
 	setTimeout(function(){
 		$(".text-spec").typed({
		strings: ["Junior Front-End Developer"],
		typeSpeed: 60,
		showCursor:false
	});
 		if ($(document).width() > 764) {
	$("[href='#home']").addClass('active');
	$("[id='hr_home']").addClass('active');
	}
 	}, 2400);
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

		$('#navbox-toggle-button').click(function() {
			$('.navbox').toggleClass('opened');
		});
  });



$(document).ready(function(){
  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('.area');
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection
    
    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
    	if( $( window ).width() > 764) {
      var divPosition = $(this).offset().top;
      if( divPosition - 1 < currentScroll ){
      	if ($currentSection != $(this)) {
        $currentSection = $(this);
		var id = $currentSection.attr('id');
   	 $('a').removeClass('active');
   	 $('div').removeClass('active');
   	 $("[href='#" + id + "']").addClass('active');
      $("[id='hr_"+id+"']").addClass('active');
        }
      }
  }
    })

  });
});
