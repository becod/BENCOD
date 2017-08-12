$(function() {
  $('.intro').addClass('go');

  $('.reload').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });

  });
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
