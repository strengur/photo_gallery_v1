// Set the gloabal varable for large image path.
$folderPath = "assets/Photos/";

// Set variable for the elements that will be added to the body when thumbnail is clicked.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Append elements to overlay's div
$overlay.append($image);
$overlay.append($caption);

// Append the complete overlay to the body
$("body").append($overlay);

// When a thumbnail is clicked the the overlay is showed.
$("#imageGalleryList a").click(function(event) {
  event.preventDefault();

  // Get and set basic variables to be used to display correct image and caption.
  var $imagePath = $(this).attr("href");
    // Use the slice to get only the file name of the thumbnail.
  var $fileName = $imagePath.slice($imagePath.lastIndexOf('/'));
    // Combine the path to large images and the file name to be used later on when adding the image source.
  var $fullPathAndName = $folderPath.concat($fileName);
    // Get the alt text from the image of selected element by using .childre() to get to the img element.
  var $imageCaption = $(this).children("img").attr("alt");

  $image.attr("src", $fullPathAndName);
  $caption.text($imageCaption);

  $overlay.show();

  // Get href path for the previous image to work with and add it to global varable.
  $previous = $(this).parent().prev("li").children().attr("href");
  if ($previous != undefined) {
    console.log("Í lagi");
  } else {
    console.log("Ekki í lagi");
    // Fade out right arrow and disable it
  }

  // Get href path for the next image to work with and add it to global varable.
  $next = $(this).parent().next("li").children().attr("href");
  if ($next != undefined) {
    console.log("Í lagi");
  } else {
    console.log("Ekki í lagi");
    // Fade out right arrow and disable it
  }


});

$("#overlay").click(function() {
  $overlay.hide();
  console.log($previous);
  console.log($next);
});

$('.next').click(function() {
  console.log('Next has been clicked!');
});
