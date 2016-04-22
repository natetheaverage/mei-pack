(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//require('vueify-insert-css');
//require('vue-hot-reload-api');
//var Vue = require('vue');
//var app = require('./app');
//Vue.use( require('vue-resource') );
//module.exports = new Vue(app).$mount('#portfolio'); 
//header('Access-Control-Allow-Origin: *');
//Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
// allow origin
//header('Access-Control-Allow-Origin: *');
// add any additional headers you need to support here
//header('Access-Control-Allow-Headers: Origin, Content-Type');

//========================
//Follow button
//========================

// $(function() {

// 	// SOME VARIABLES
// 	var button = '.dribbble-follow-button',
// 		label = $(button).text(),
// 		username = $('a'+button).attr('href').toLowerCase().replace('http://dribbble.com/', ''),
// 		disableCount = $(button).attr('class');

// 	// DISPLAYED WHEN THE API IS NOT RESPONDING
// 	$(button).wrap('<div class="dribbble-follow-button" />').removeClass().addClass('label').html('<i></i> '+label);

// 	// REQUESTS USER'S DATA FROM DRIBBBLE'S API AND APPENDS IT
// 	$.getJSON('http://api.dribbble.com/players/'+username+'?callback=?', function(data) {
// 		$(button).wrap('<div class="dribbble-follow-button '+disableCount+'" />')
//         .parent().html('<a class="label" href="http://dribbble.com/'+username+'" target="_blank"><i></i>'+label+'</a><a class="count" href="http://dribbble.com/'+username+'/followers" target="_blank"><i></i><u></u>'+data.followers_count+' followers</a>');
// 		$(button+'.disableCount').find('.count').remove();
// 	});

// });

//========================
//PRELOADER
//========================
'use strict';

$(window).load(function () {
  // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow');
  // will fade out the white DIV that covers the website.
  $('body').delay(350).css({ 'overflow': 'visible' });
});
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
  mousescrollstep: 70,
  cursorcolor: "#ea9312",
  cursorwidth: "5px",
  cursorborderradius: "10px",
  cursorborder: "none"
});

//========================
//SMOOTHSCROLL
//========================
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function () {

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
      $(window).scroll(function () {

        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 40) {
          $('.navbar').removeClass('animated fadeOutUp').addClass('animated fadeInDown').fadeIn();
        } else {
          $('.navbar').removeClass('animated fadeInDown').addClass('animated fadeOutUp').fadeOut();
        }
      });
    });
  });
})(jQuery);

//========================
//icon hover effect
//========================
$('#services img').hover(function () {
  $(this).addClass('animated pulse');
}, function () {
  $(this).removeClass('animated pulse');
});

},{}]},{},[1]);

//# sourceMappingURL=befolio.js.map
