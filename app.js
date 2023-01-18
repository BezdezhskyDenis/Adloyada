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

$(window).resize(function () {
  const viewportWidth = $(window).width();
  const viewportHeight = $(window).height();

  if (viewportWidth < 1000){
    $('#carouselExampleAutoplaying').addClass('w-100');
    $('#carouselExampleAutoplaying').removeClass('w-75');
  } else {
    $('#carouselExampleAutoplaying').addClass('w-75');
    $('#carouselExampleAutoplaying').removeClass('w-100');
  }
  console.log(viewportHeight, viewportWidth)
});
