// picture LightBox

function openModal(type) {
    document.getElementById("myModal"+ type).style.display = "block";
  }
  
  function closeModal(type) {
    document.getElementById("myModal" + type).style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
    myModalPicture.scrollTo(0, 0);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesPic");
    var dots = document.getElementsByClassName("demopic");
    var captionText = document.getElementById("captionPicture");
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
  
  // Video LightBox
  
  
  var slideIndex = 1;
  showVideo(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showVideo(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentVideo(n) {
    showVideo(slideIndex = n);
    myModalVideo.scrollTo(0, 0);
  }
  
  function showVideo(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesVideo");
    var dots = document.getElementsByClassName("demoVideo");
    var captionText = document.getElementById("captionVideo");
    // let playVideo = slides[slideIndex-1].children[1].getAttribute('src');
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
  
  
    