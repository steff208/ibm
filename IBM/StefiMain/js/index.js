/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
  var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  

  



/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#hero", duration: $("#hero").height()}).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#services", duration: $("#services").height()}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#portfolio", duration: $("#portfolio").height()}).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#client", duration: $("#client").height() + 250}).setClassToggle("#client-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //The about paragraph
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.about-text',
    triggerHook: .7
  })
  .setClassToggle('.about-text', 'about-text-animate')
  .reverse(false)
  .addTo(controller2);
    

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'service-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});



/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


