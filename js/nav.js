$(function() {
  $('.top-bar-section a').on('click', function(e) {
    target = $(e.target);
    id = target.attr('href');
    $.scrollTo(id, 500, {offset: {top:-75, left:0}});
  });
});
