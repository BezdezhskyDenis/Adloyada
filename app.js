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

$("a").on("touchstart click", function () {
  var userChose = $(this).attr("name");
  switch (userChose) {
    case "adloyada":
      $(this).attr("href", "/");
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

// $(document).ready(function() {
//   const viewportWidth = $(window).width();
//   const viewportHeight = $(window).height();

//   if (viewportWidth < 1000){
//     $('#carouselExampleAutoplaying').addClass('w-75');
//     $('#carouselExampleAutoplaying').removeClass('w-50');
//   } else {
//     $('#carouselExampleAutoplaying').addClass('w-50');
//     $('#carouselExampleAutoplaying').removeClass('w-75');
//   }
// });

// $(window).resize(function () {
//   const viewportWidth = $(window).width();
//   const viewportHeight = $(window).height();

//   if (viewportWidth < 1200){
//     $('#carouselExampleAutoplaying').addClass('w-75');
//     $('#carouselExampleAutoplaying').removeClass('w-50');
//   } else {
//     $('#carouselExampleAutoplaying').addClass('w-50');
//     $('#carouselExampleAutoplaying').removeClass('w-75');
//   }
//   // console.log(viewportHeight, viewportWidth);
//   // $('#ww').text(viewportWidth)
// });
