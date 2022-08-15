$("nav button").on("click", function () {
  $("nav button i").toggleClass("fa-stream");
  $("nav button i").toggleClass("fa-times");
});

// Configure carousel
$(".carousel").carousel({
  keyboard: true,
  pause: false,
});

// Video play
$(function () {
  // Auto play video
  $(".video").click(function () {
    var theModal = $(this).data("target");
    var videoSRC = $(this).data("video");
    videoSRCauto =
      videoSRC +
      "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal).on("hide.bs.modal", function () {
      $(theModal + " iframe").attr("src", "");
    });
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", "");
    });
  });
});

// NAVBAR BACKGROUND COLOR CHANGE
$(function () {
  $(document).scroll(function () {
    var home = $("#home");
    var $nav = $("nav");
    var containerFluid = $(".container-fluid");
    $nav.toggleClass("bg-black", $(this).scrollTop() > home.height() - 200);
    containerFluid.toggleClass(
      "flex-md-row",
      $(this).scrollTop() > home.height() - 200
    );
  });
});

// SMOOTH SCROLLING
$("nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 90,
      },
      800
    );
  }
});

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      $("#service").addClass("fadeIn");
    }
  },
  { threshold: [0.4] }
);

var observer1 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      $("#aboutimg").addClass("animated");
    }
  },
  { threshold: [0.3] }
);

var observer2 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      $(".form").addClass("pulse");
    }
  },
  { threshold: [0.85] }
);

observer.observe(document.querySelector("#service"));
observer1.observe(document.querySelector("#about"));
observer2.observe(document.querySelector("#contact"));
