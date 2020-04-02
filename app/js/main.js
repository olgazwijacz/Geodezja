document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
 });



 //Adding smooth scrolling to menu and arrows


 $('.arrow').click(function() {
    $('html,body').animate({
        scrollTop: $('#oferta').offset().top},
        'slow');
});
$('.arrow2').click(function() {
    $('html,body').animate({
        scrollTop: $('#o-nas').offset().top},
        'slow');
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

