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

<<<<<<< HEAD
  var altText = "";
  var srcUrl = "";
  var fileName ="";
  var innerHTML = "";

  altText = $(this).attr("alt");
  srcUrl = $(this).attr("src");
  fileName = srcUrl.slice(srcUrl.lastIndexOf('/'));

  // innerHTML += '<div id="large-slide-image">';
  // innerHTML += '<div class="previous"><img src="assets/icon/left-arrow.svg"></div>';
  // innerHTML += '<div class="next"><img src="assets/icon/right-arrow.svg"></div>';
  innerHTML += '<img src="assets/Photos/';
  innerHTML += fileName;
  innerHTML += '">';
  innerHTML += '<p>';
  innerHTML += altText;
  innerHTML += '</p>';
  // innerHTML += '<div class="close"><img id="close-slideshow" src="assets/icon/close.svg"></div>';
  // innerHTML += '</div>';
  $(".image-slide").append(innerHTML);
=======
>>>>>>> parent of 5cf6d4c... Lots of things
});

$(".image-slide").click(function() {
  $("#large-slide-image").remove();
  $("#overlay").removeClass("darkTransparent");

});
