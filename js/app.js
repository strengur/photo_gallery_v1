
$("img").click(function() {
  $('div[id="overlay"]').addClass("darkTransparent");

  var altText = "";
  var srcUrl = "";
  var fileName ="";
  var innerHTML = "";

  altText = $(this).attr("alt");
  srcUrl = $(this).attr("src");
  fileName = srcUrl.slice(srcUrl.lastIndexOf('/'));

  innerHTML += '<div id="large-slide-image">';
  innerHTML += '<div class="previous"><img src="assets/icon/left-arrow.svg"></div>';
  innerHTML += '<div class="next"><img src="assets/icon/right-arrow.svg"></div>';
  innerHTML += '<img src="assets/Photos/';
  innerHTML += fileName;
  innerHTML += '">';
  innerHTML += '<p>';
  innerHTML += altText;
  innerHTML += '</p>';
  innerHTML += '<div class="close"><img id="close-slideshow" src="assets/icon/close.svg"></div>';
  innerHTML += '</div>';
  $(".image-slide").append(innerHTML);
});

$('.close').click(function() {
  console.log('Clicked');
  $(".image-slide p").remove();
  $("#large-slide-image").remove();
  $("#overlay").removeClass("darkTransparent");

});

$('.next').click(function()) {
  console.log('Next has been clicked!');
});
