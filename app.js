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
  let userChose = $(this).attr("name");
  switch (userChose) {
    case "adloyada":
      $(this).attr("href", "./");
      break;
    case "sponsors":
      $(this).attr("href", "./sponsors.html");
      break;
    case "information":
      $(this).attr("href", "./about.html");
      break;
    case "gallery":
      $(this).attr("href", "./gallery.html");
      break;
    case "contactUs":
      $(this).attr("href", "./contactUs.html");
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
    case "hotels":
      $(this).attr("target", "_blank");
      $(this).attr(
        "href",
        "https://www.booking.com/searchresults.en-us.html?ss=%D7%97%D7%95%D7%9C%D7%95%D7%9F%2C+%D7%99%D7%A9%D7%A8%D7%90%D7%9C&ssne=Tel+Aviv&ssne_untouched=Tel+Aviv&label=%D7%97%D7%92%D7%99%D7%92%D7%95%D7%AA-%D7%A2%D7%93%D7%9C%D7%90%D7%99%D7%93%D7%A2-%D7%95%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99-%D7%A4%D7%95%D7%A8%D7%99%D7%9D-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%91_16032_Map_Festi_recom&aid=1676911&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-780164&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=he&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=45f22eeff97a00b4&ac_meta=GhA0NWYyMmVlZmY5N2EwMGI0IAAoATICaGU6CteX15XXnNeV159AAEoAUAA%3D&checkin=2023-03-06&checkout=2023-03-07&group_adults=1&no_rooms=1&group_children=0&sb_travel_purpose=leisure"
      );
      break;
    case "bars":
      $(this).attr("target", "_blank");
      $(this).attr(
        "href",
        "https://www.rest.co.il/restaurants/holon/pubs-and-bars/"
      );
      break;
    case "parking":
      $(this).attr("target", "_blank");
      $(this).attr(
        "href",
        "https://www.google.com/maps/search/%D7%97%D7%A0%D7%99%D7%95%D7%A0%D7%99%D7%9D+%D7%97%D7%95%D7%9C%D7%95%D7%9F%E2%80%AD/@32.0178837,34.779918,16z/data=!4m2!2m1!6e2?hl=iw"
      );
      break;
    case "faqs":
      $(this).attr("href", "./faqs.html");
      break;
    case "purimGame":
      $(this).attr("href", "./purimGame.html");
      break;
    default:
      break;
  }
});

$(document).ready(function () {
  const viewportWidth = $(window).width();

  if (viewportWidth < 1300) {
    $("#galleryContainer").addClass("w-100 ");
    $("#galleryContainer").removeClass("w-75");
    $("#firstContainer").addClass("visually-hidden");
    $("#carouselExampleAutoplaying").removeClass("visually-hidden");
    $("#navExpend").removeClass("p-3");
    $("#logoExpend").addClass("navbar-brand");
    $("#logoExpend").removeClass("logo");
  } else {
    $("#galleryContainer").addClass("w-75");
    $("#galleryContainer").removeClass("w-100");
    $("#firstContainer").removeClass("visually-hidden");
    $("#carouselExampleAutoplaying").addClass("visually-hidden");
    $("#navExpend").addClass("p-3");
    $("#logoExpend").removeClass("navbar-brand");
    $("#logoExpend").addClass("logo");
  }
});

$(window).resize(function () {
  const viewportWidth = $(window).width();

  if (viewportWidth < 1300) {
    $("#galleryContainer").addClass("w-100 ");
    $("#galleryContainer").removeClass("w-75");
    $("#firstContainer").addClass("visually-hidden");
    $("#carouselExampleAutoplaying").removeClass("visually-hidden");
    $("#navExpend").removeClass("p-3");
    $("#logoExpend").addClass("navbar-brand");
    $("#logoExpend").removeClass("logo");
  } else {
    $("#galleryContainer").addClass("w-75");
    $("#galleryContainer").removeClass("w-100");
    $("#firstContainer").removeClass("visually-hidden");
    $("#carouselExampleAutoplaying").addClass("visually-hidden");
    $("#navExpend").addClass("p-3");
    $("#logoExpend").removeClass("navbar-brand");
    $("#logoExpend").addClass("logo");
  }
});

$(document).ready(function () {
  const viewportWidth = $(window).width();

  if (viewportWidth < 1000) {
    $(".styleTriangle").attr("hidden", "");
    $(".floatLogo").removeAttr("hidden");
  } else {
    $(".floatLogo").attr("hidden", "");
    $(".styleTriangle").removeAttr("hidden");
  }
});

$(window).resize(function () {
  const viewportWidth = $(window).width();

  if (viewportWidth < 1000) {
    $(".styleTriangle").attr("hidden", "");
    $(".floatLogo").removeAttr("hidden");
  } else {
    $(".floatLogo").attr("hidden", "");
    $(".styleTriangle").removeAttr("hidden");
  }
});

const countDownDate = new Date("Mar 6, 2023 12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#clockDay").text(days);
  $("#clockHours").text(hours);
  $("#clockMinutes").text(minutes);
  $("#clockSeconds").text(seconds);
}, 1000);

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
