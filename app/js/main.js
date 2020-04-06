document.addEventListener("DOMContentLoaded", function() {
    console.log("Your document is ready!");
 });



 //Adding smooth scrolling to menu and arrows


 $(".arrow").click(function() {
    $("html,body").animate({
        scrollTop: $("#oferta").offset().top},
        "slow");
});
$(".arrow2").click(function() {
    $("html,body").animate({
        scrollTop: $("#o-nas").offset().top},
        "slow");
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

   let hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

// Mobile menu - Hamburger animation

const navSlide =() => {
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list li");

 hamburger.addEventListener("click", ()=>{
  //nav.focus();
//Toggle Nav
  nav.classList.toggle("nav-active");

// Toggle hamburger

 hamburger.classList.toggle("toggle");


//Animate Links
   navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ""
    } else {
     link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.17}s`;
    }
   
 });
});

};
navSlide();

// I ANIMATIONS

// Main title animation

TweenMax.from(".text-slide", 1.3, {
  opacity: 0,
  x:900,
  ease: Expo.easeInOut,
  }, 0.08);

// Servises single box animation

const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();
tl.from(".tytul", 0.4, {x:300, opacity:0})
tl.from(".a", 0.3, {x:-70, opacity:0})
tl.from(".b", 0.3, {x:-70, opacity:0})
tl.from(".c", 0.3, {x:-70, opacity:0})
tl.from(".d", 0.3, {x:-70, opacity:0})
tl.from(".e", 0.3, {x:-70, opacity:0})
tl.from(".f", 0.3, {x:-70, opacity:0})
tl.from(".g", 0.3, {x:-70, opacity:0})
tl.from(".arrow2", {x:-70, opacity:0})

const scene = new ScrollMagic.Scene({
    triggerElement:".uslugi",
    offset: -250,
})
.setTween(tl)
.addTo(controller)

const tl2 = new TimelineMax();
const controller2 = new ScrollMagic.Controller();

tl2.from(".baner-o-nas", .4,  {opacity:0, ease: Expo.easeInOut},"=0.30" )

const scene2 = new ScrollMagic.Scene({
    triggerElement:".arrow2",

    offset:140,
})
.setTween(tl2)
.addTo(controller2)

const tl3 = new TimelineMax();
const controller3 = new ScrollMagic.Controller();

tl3.from(".o-nas", .5,  {opacity:0, ease: Expo.easeInOut}, "=0.65" )

const scene3 = new ScrollMagic.Scene({
    triggerElement:".baner-o-nas",
    offset:300,
    
})
.setTween(tl3)
.addTo(controller3)

const tl4= new TimelineMax();
const controller4 = new ScrollMagic.Controller();

tl4.from(".formularz", .6,  {opacity:0, ease: Expo.easeInOut},"=0.33" )
.from(".box-sec", .6, {opacity:0, x: 500, ease: Expo.easeInOut})

const scene4= new ScrollMagic.Scene({
    triggerElement:".trigger-sec",
    offset: 50
 
})
.setTween(tl4)
.addTo(controller4)

const tl5= new TimelineMax();
const controller5 = new ScrollMagic.Controller();

tl5.from(".container-map", .5,  {opacity:0, scale:0, ease: Expo.easeInOut},"=0.2" )
.from(".container-details", .6, {opacity:0, x: 500, ease: Expo.easeInOut})

const scene5= new ScrollMagic.Scene({
    triggerElement:".sub",
    offset: 40
 
})
.setTween(tl5)
.addTo(controller5)

const tl6 = new TimelineMax();
const controller6 = new ScrollMagic.Controller();
tl6.from(".logo-footer",.5 , { delay: .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".ukryty-tytul", .5, { delay: .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".nav-footer h3", .5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)
.from(".media h3 ", .5 ,{ delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)

const scene6 = new ScrollMagic.Scene({
    triggerElement:".container-details .adres",
    offset: 200

})
.setTween(tl6)
.addTo(controller6)

// II ANIMATIONS FOR MEDIA QUERIES

const textSlideLeft = document.querySelectorAll(".text-slide")
if (window.matchMedia("(min-width: 992px)").matches) {

// Menu li animation

TweenMax.from(".nav-list", 1.3, {

  opacity: 0,
  x:-900,
  ease: Expo.easeInOut,
  }, 0.08);
}

// Message "sent" after subbmision

function getUrlVars() {
  let x = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      x[key] = value;
  });
  return x;
  }
 let issent= getUrlVars()["message"];
    console.log(issent);
    if (issent == "wyslano") {

         $("html,body").animate({
            scrollTop: $(".container-form").offset().top},
            "slow");

            setTimeout(function () {
              alert("Dziękujemy za wiadomość. Wkrótce odpiszemy!");
          }, 2500);
     }


  // Menu nav-list focusout

  // let navList = document.querySelector(".nav-list");
  //   console.log(navList);
  //   navList.addEventListener("focusout", () => {
  //     navList.classList.toggle("nav-active");
  //     console.log('aaa');
  //     });
  
  



