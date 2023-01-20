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

$("a").on("touchend touchstart tap click", function () {
  var userChose = $(this).attr("name");
  switch (userChose) {
    case "adloyada":
      $(this).attr("href", "./");
      break;
    case "meyEden":
      $(this).attr("target", "_blank");
      $(this).attr("href", "https://www.meyeden.co.il/");
      break;
    case "beer":
    $(this).attr("target", "_blank");
      $(this).attr("href", "https://en.tempo.co.il/brands/gold-star/");
      break;
    case "borger":
    $(this).attr("target", "_blank");
      $(this).attr("href", "https://app.burgeranch.co.il/");
      break;
    case "pizza":
      $(this).attr("target", "_blank");
      $(this).attr("href", "https://easy.co.il/page/10052918");
      break;
    case "azriely":
      $(this).attr("target", "_blank");
      $(this).attr("href", "https://www.azrieli.com/");
      break;
    case "spaHolon":
      $(this).attr("target", "_blank");
      $(this).attr("href", "https://spat-holon.business.site/");
      break;
    case "osem":
      $(this).attr("target", "_blank");
      $(this).attr("href", "https://www.osem-nestle.co.il/");
      break;
    case "l":
      snare.play();
      break;
    default:
      break;
  }
});

$(document).ready(function() {
  const viewportWidth = $(window).width();
  // const viewportHeight = $(window).height();

  if (viewportWidth < 1300){
    $('#galleryContainer').addClass('w-100 ');
    $('#galleryContainer').removeClass('w-75');
    $('#firstContainer').addClass('visually-hidden');
    $('#carouselExampleAutoplaying').removeClass('visually-hidden');

  } else {
    $('#galleryContainer').addClass('w-75');
    $('#galleryContainer').removeClass('w-100');
    $('#firstContainer').removeClass('visually-hidden');
    $('#carouselExampleAutoplaying').addClass('visually-hidden');
  }
});

$(window).resize(function () {
  const viewportWidth = $(window).width();
  // const viewportHeight = $(window).height();

  if (viewportWidth < 1300){
    $('#galleryContainer').addClass('w-100 ');
    $('#galleryContainer').removeClass('w-75');
    $('#firstContainer').addClass('visually-hidden');
    $('#carouselExampleAutoplaying').removeClass('visually-hidden');

  } else {
    $('#galleryContainer').addClass('w-75');
    $('#galleryContainer').removeClass('w-100');
    $('#firstContainer').removeClass('visually-hidden');
    $('#carouselExampleAutoplaying').addClass('visually-hidden');
  }
  // console.log(viewportHeight, viewportWidth);
  // $('#ww').text(viewportWidth)
});
