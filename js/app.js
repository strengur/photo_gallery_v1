// Set the gloabal varable for large image path.
var $folderPath = "assets/Photos";

// Set variable for the elements that will be added to the body when thumbnail is clicked. The structure of overlay.
var $overlay = $('<div class="overlay"></div>');
var $imageArea = $('<div class="overlay-image-area"></div>');
var $image = $('<img class="large-image">');
var $caption = $("<p></p>");
var $leftArrow = $('<img class="previous overlay-icon" src="assets/icons/left-arrow.svg" alt="Arrow icon pointing left">');
var $rightArrow = $('<img class="next overlay-icon" src="assets/icons/right-arrow.svg" alt="Arrow icon pointing right">');
var $closeOverlay = $('<img class="close overlay-icon" src="assets/icons/close.svg" alt="X icon to close the overlay">');

// Append elements to overlay's div
$overlay.append($imageArea);
$imageArea.append($leftArrow);
$imageArea.append($closeOverlay);
$imageArea.append($rightArrow);
$imageArea.append($image);
$imageArea.append($caption);

// Append the complete overlay to the body
$("body").append($overlay);

// When a thumbnail is clicked the the overlay is showed width this function.
$("#imageGalleryList a").click(function (event) {
  event.preventDefault();
  // Get and set basic variables to be used to display correct image and caption.
  var $imagePath = $(this).attr("href");
  // Use the slice property to get only the file name of the thumbnail.
  var $fileName = $imagePath.slice($imagePath.lastIndexOf('/'));
  // Combine the path to large images and the file name to be used later on when adding the image source.
  var $fullPathAndName = $folderPath.concat($fileName);
  // Get the alt text from the image of selected element by using .childre() to get to the img element.
  var $imageCaption = $(this).children("img").attr("alt");

  $image.attr("src", $fullPathAndName);
  $caption.text($imageCaption);

  $overlay.fadeIn();

  // Get href path for the previous image to work with and add it to global varable.
  $previous = $(this).parent().prev("li").children();

  // Get href path for the next image to work with and add it to global varable.
  $next = $(this).parent().next("li").children();



});

//This function shows previous image.
$(".previous").click(function previousImage() {
  if ($previous !== undefined) {
    // Get and set basic variables to be used to display correct image and caption.
    var $imagePath = $($previous).attr("href");
    // Use the slice to get only the file name of the thumbnail.
    var $fileName = $imagePath.slice($imagePath.lastIndexOf('/'));
    // Combine the global path to large images and the file name to be used later on when adding the image source.
    var $fullPathAndName = $folderPath.concat($fileName);
    // Get the alt text from the image of selected element by using .childre() to get to the img element.
    var $imageCaption = $($previous).children("img").attr("alt");

    $image.attr("src", $fullPathAndName);
    $caption.text($imageCaption);

    // Get href path for the next image to work with and add it to global varable.
    $next = $previous.parent().next("li").children();
    // Get href path for the previous image to work with and add it to global varable.
    $previous = $previous.parent().prev("li").children();

    //Enable and disable left/right arrow depending if there is more to show.
    if ($previous.attr("href") === undefined) {
      $(".previous").hide();
    }
    if ($next.attr("href") !== undefined) {
      $(".next").show();
    }
  }
});

//This function shows next image.
$(".next").click(function nextImage() {
  if ($next.attr("href") !== undefined) {

    // Get and set basic variables to be used to display correct image and caption.
    var $imagePath = $($next).attr("href");
    // Use the slice to get only the file name of the thumbnail.
    var $fileName = $imagePath.slice($imagePath.lastIndexOf('/'));
    // Combine the global path to large images and the file name to be used later on when adding the image source.
    var $fullPathAndName = $folderPath.concat($fileName);
    // Get the alt text from the image of selected element by using .childre() to get to the img element.
    var $imageCaption = $($next).children("img").attr("alt");

    $image.attr("src", $fullPathAndName);
    $caption.text($imageCaption);

    // Get href path for the previous image to work with and add it to global varable.
    $previous = $next.parent().prev("li").children();
    // Get href path for the next image to work with and add it to global varable.
    $next = $next.parent().next("li").children();

    //Enable and disable left/right arrow depending if there is more to show.
    if ($next.attr("href") === undefined) {
      $(".next").hide();
    }
    if ($previous.attr("href") !== undefined) {
      $(".previous").show();
    }
  }
});

// Function to close the overlay when X is clicked.
$(".close").click(function() {
  console.log("FFFF");
$(".overlay").hide();
});

// Live searching in grid view.
var $unorderedList = $("#imageGalleryList");
var $listItem = $("#imageGalleryList li")
var $searchString = $("#search");


function isSearchPresent() {
  return $searchString.val().length = -1;
}

function hideOrShowMatchingImages() {
  if(isSearchPresent()) {
    var $input = $searchString.val().toLowerCase();
    var $imageAttr = $listItem.each(function() {
      if($(this).children().children().attr('alt').replace(/\s+/g, ' ').toLowerCase().includes($input)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}

$searchString.keyup(hideOrShowMatchingImages);
