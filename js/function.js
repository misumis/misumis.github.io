$(document).ready(function(){
    var bodyHeight = $("body").height()-$(window).height();
    window.onscroll = function() {
 
       //Determine the amount to rotate by.
       var deg = -window.scrollY*(360/bodyHeight)*0.5;
 
       $(".objects img").css({
         "transform": "rotate("+deg+"deg)",
       });
 
    };
});


$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  e.preventDefault();
  var pos = $id.offset().top;
  $('body, html').animate({scrollTop: pos}, 1000);
});