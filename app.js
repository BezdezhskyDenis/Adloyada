$("li").on("mouseover", function () {
  $(this).addClass("border");
  $(this).attr("aria-expanded", "true");
  $(this).children().addClass("show");
});

$("li").on("mouseout", function () {
  $(this).removeClass("border");
  $(this).attr("aria-expanded", "false");
  $(this).children().removeClass("show");
});
