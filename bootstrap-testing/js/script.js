// pop up window warning

$(window).resize(function() {
    if ($(window).width() < 1300) { // Change 768 to the minimum width at which your layout looks good
      $('#popup-message').modal('show');
    } else {
      $('#popup-message').modal('hide');
    }
  });
  