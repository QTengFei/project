'use strict';

$(function () {
  function resize() {
    var windowWidth = $(window).innerWidth();
    var isSmallScreen = windowWidth < 768;
    $('#main_ad>.carousel-inner>.item').each(function (i, item) {
      var $item = $(item);
      var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
      $item.css('backgroundImage', 'url("' + imgSrc + '")');
      if (isSmallScreen) {
        $item.html('<img src="' + imgSrc + '" alt="" />')
      } else {
        $item.empty();
      }
    })
  }
  $(window).on('resize', resize).trigger('resize');

  $('[data-toggle="tooltip"]').tooltip();

  var $ulContainer = $('.nav-tabs');
  var width = 30;
  $ulContainer.children().each(function (index, element) {
    width += element.clientWidth;
  });
  $(window).on('resize', small);

  function small() {
    if (width > $(window).innerWidth()) {
      $ulContainer.css('width', width).parent().css('overflow-X', 'scroll');
    } else {
      $ulContainer.css('width', "auto").parent().css('overflow-X', '');
    }
  }
  small();

  var $newTitle = $('.new-title');
  $('#news .nav-pills a').on('click', function () {
    var $this = $(this);
    var title = $this.data('title');
    $newTitle.text(title);
  });


  var $carousels = $('.carousel');
  var startX, endX;
  var offset = 50;
  $carousels.on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
    // console.log(startX);
  });

  $carousels.on('touchmove', function (e) {
    endX = e.originalEvent.touches[0].clientX;
    // console.log(endX);
  });
  $carousels.on('touchend', function (e) {
    var distance = Math.abs(startX - endX);
    if (distance > offset) {
      $carousels.carousel(startX > endX ? 'next' : 'prev');
    }
  })

});


let tese = document.querySelectorAll('#tese a');
for (let i = 0; i < tese.length; i++) {
  tese[i].addEventListener('click', function () {
    tese[i].style.textDecoration = 'none';
  })
}