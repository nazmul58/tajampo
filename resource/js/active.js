$(document).ready(function () {
  //STICKY MENU
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  //OWLCROUSEL
  $(".owl-carousel").owlCarousel({
    loop: true,

    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

  // Mobile menu
  function opeNav(){
    document.getElementById("myNav").style.width="100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
