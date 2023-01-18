$("li").on("mouseover", function () {
  $(this).addClass("border rounded-pill");
  $(this).attr("aria-expanded", "true");
  $(this).children().addClass("show");
});

$("li").on("mouseout", function () {
  $(this).removeClass("border rounded-pill");
  $(this).attr("aria-expanded", "false");
  $(this).children().removeClass("show");
});

$("a").on("click", function () {
  var userChose = $(this).attr("id");
  switch (userChose) {
    case "adloyada":
      $(this).attr("target", "_blank");
      $(this).attr("href", "/");
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kickBass.play();
      break;
    case "l":
      snare.play();
      break;
    default:
      break;
  }
});
