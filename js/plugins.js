window.onload = function () {
  //thumbnail hover
  $('.movie-thumbnail').hover(function() {
    $('.m-thumbnail-content', this).fadeIn(200);
  });

  $('.movie-thumbnail').mouseleave(function() {
    $('.m-thumbnail-content', this).fadeOut(200)
  });
  ////thumbnail hover end
};
