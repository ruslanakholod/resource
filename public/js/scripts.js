'use strict';

$(document).ready(function () {
  function configureMenu(linkClass, contentClass) {
    $(contentClass).prepend('<a class="close">&times;</a>');
    $(linkClass).on('click', function () {
      $('.other--item').removeClass('active');
      $(contentClass).toggleClass('active');
      $('.main--head--item').removeClass('active');
      $(this).addClass('active');
    });
    $(linkClass).on('mouseenter', function () {
      $(contentClass).addClass('hover');
      $(this).addClass('active');
    });
    $(linkClass).on('mouseleave', function () {
      $(contentClass).removeClass('hover');
      if (!$(contentClass).hasClass('active')) {
        $(this).removeClass('active');
      }
    });

    $(contentClass).find('.close').on('click', function () {
      $(contentClass).removeClass('active');
      $(linkClass).removeClass('active');
    });
  }

  $('.content--item--bottom-link').on('mouseenter', function () {
    $('svg').addClass('golink');
  });

  $('.content--item--bottom-link').on('mouseleave', function () {
    $('svg').removeClass('golink');
  });

  configureMenu('.item-a', '.other--itemA');
  configureMenu('.item-b', '.other--itemB');
  configureMenu('.item-c', '.other--itemC');
  configureMenu('.item-d', '.other--itemD');
  configureMenu('.item-e', '.other--itemE');
  configureMenu('.item-f', '.other--itemF');
  configureMenu('.item-g', '.other--itemG');
  configureMenu('.item-h', '.other--itemH');
  configureMenu('.item-i', '.other--itemI');
  configureMenu('.item-j', '.other--itemJ');
  configureMenu('.item-k', '.other--itemK');
  configureMenu('.item-l', '.other--itemL');
});