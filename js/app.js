$("img").click(function() {
  $('div[id="overlay"]').addClass("darkTransparent");
  var $altText = $(this).attr("alt");
  var $innerHTML = "";
  $innerHTML += '<h4 id="close-slideshow">+</h4>';
  $innerHTML += '<img src="assets/Photos/01.jpg">';
  $innerHTML += '<p>';
  $innerHTML += $altText;
  $innerHTML += '</p>';
  $(".image-slide").append($innerHTML);




  //$("p").text( $altText );
});
