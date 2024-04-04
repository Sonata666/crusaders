$(function() {
    $.scrollify({
      section : ".scroll",
      scrollSpeed: 2500,
    });
  });

  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.footer_block', { delay: 700, distance: '2em', origin: 'left'  });
  ScrollReveal().reveal('.footer_form', { delay: 1200, distance: '2em', origin: 'right' });
  ScrollReveal().reveal('.header_block', { delay: 1200, distance: '2em', origin: 'right' });
  ScrollReveal().reveal('.header_container', { delay: 400, distance: '1em', origin: 'top',reset: false });
  ScrollReveal().reveal('.wave1', { delay: 350, distance: '0.2em', origin: 'bottom'});
  ScrollReveal().reveal('.wave2', { delay: 400, distance: '0.2em', origin: 'bottom'});
  ScrollReveal().reveal('.wave3', { delay: 550, distance: '0.2em', origin: 'bottom'});
  ScrollReveal().reveal('.wave4', { delay: 600, distance: '0.2em', origin: 'bottom'});
  ScrollReveal().reveal('.map_object1', { delay: 300, origin: 'bottom'});
  ScrollReveal().reveal('.map_object2', { delay: 425,  origin: 'bottom'});
  ScrollReveal().reveal('.map_object3', { delay: 650, origin: 'bottom'});
  ScrollReveal().reveal('.main_container', { delay: 650, origin: 'top'});


