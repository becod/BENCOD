$(document).ready( function(){
    $('#header').removeClass('hiden').delay(2000)
    $('#section').removeClass('hiden').delay(2000).queue(function() {
        $('.loading').remove()
    });
    $(window).scroll(function(){
		$('.hideme').each(function(i){
			var bottom_of_object=$(this).offset().top+$(this).outerHeight();
			var bottom_of_window=$(window).scrollTop()+$(window).height();
			if(bottom_of_window>bottom_of_object){
				$(this).animate({'opacity':'1'},800);
			}
		});
	});
});
$(function() {
  $('.intro').addClass('go');
});
$(function(){
	$('a[href=#]:not(a[href=#])').on('click',function(){
		if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
			var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');
			if(target.length){
				$('html,body').animate({scrollTop:target.offset().top},900);
				return false;
			}
		}
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