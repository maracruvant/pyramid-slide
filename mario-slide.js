    // get the value from the slider
    var heightStr = $('#slider').val();
    // convert the string to an int
    var height = parseInt(heightStr);

// display the selected height next to the slider
function displayHeight(height) {
    $('#select-height').html(height);
}

// draw the pyramid
function drawPyramid(height) {
  // clear the old content from the #pyramid container
  $('#pyramid').empty();
  displayHeight(height);
  for (var row = 0; row <l height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row
        var rowElem;
        rowElem = $("<p>").html(rowStr);

        // insert the paragraph into the #pyramid container
        $('#pyramid').append(rowElem);
      }
  }
