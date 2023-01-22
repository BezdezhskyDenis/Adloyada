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
    case "sponsors":
      $(this).attr("href", "./");
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
      $(this).attr("href", "./");
      break;
    case "bars":
      $(this).attr("href", "./");
      break;
    case "parking":
      $(this).attr("href", "./");
      break;
    case "roads":
      $(this).attr("href", "./");
      break;
      case "faqs":
      $(this).attr("href", "./");
      break;
    default:
      break;
  }
});

$(document).ready(function () {
  const viewportWidth = $(window).width();
  // const viewportHeight = $(window).height();

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
  // const viewportHeight = $(window).height();

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
  // console.log(viewportHeight, viewportWidth);
  // $('#ww').text(viewportWidth)
});


// Set the date we're counting down to
const countDownDate = new Date("Mar 6, 2023 09:30:00").getTime();

setInterval( ()=> {
  const now = new Date().getTime();
  const distance = countDownDate - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $('#clockDay').text(days);
  $('#clockHours').text(hours);
  $('#clockMinutes').text(minutes);
  $('#clockSeconds').text(seconds);
}, 1000);
















// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  myModal.scrollTo(0, 0);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}