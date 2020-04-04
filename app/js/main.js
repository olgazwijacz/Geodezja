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

   let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

// Mobile menu - Hamburger animation

const navSlide =() => {
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');



 hamburger.addEventListener('click', ()=>{

//Toggle Nav

  nav.classList.toggle('nav-active');

// Toggle hamburger

 hamburger.classList.toggle('toggle');


//Animate Links
   navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ''
    } else {
     link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.17}s`;
    }
   
 });
});


};
navSlide();

