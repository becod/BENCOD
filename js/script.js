$(document).ready( function(){
    $('.loading').remove().delay(200);
});
$(function() {
  $('.intro').addClass('go');

  //$('.reload').click(function() {
  //  $('.intro').removeClass('go').delay(200).queue(function(next) {
    //$('.intro').addClass('go');
   //   next();
   // });

  //});
});
(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for larger scaling BG
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // speed of title scroll
        var Num3mod = Num3 + 1;
        return $('.container-vid-shade').css('opacity', Num),
        $(".container-vid").css({"transform":"scale(" + Num2mod + ")"});
        //$(".text").css({"margin-top":"-" + Num3mod + "px"});
    });
}.call(this));

var nav = document.getElementById('container-nav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}