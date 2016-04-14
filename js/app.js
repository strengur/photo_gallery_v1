$("img").click(function() {
  $('div[id="overlay"]').addClass("darkTransparent");
  var $altText = $(this).attr("alt");
  var $innerHTML = "";
  $innerHTML += '<div id="large-slide-image"><h4 id="close-slideshow">+</h4>';
  $innerHTML += '<img src="assets/Photos/01.jpg"></div>';
  $innerHTML += '<p>';
  $innerHTML += $altText;
  $innerHTML += '</p>';
  $(".image-slide").append($innerHTML);

});

$(".image-slide").click(function() {
  $("#large-slide-image").remove();
  $("#overlay").removeClass("darkTransparent");

});
