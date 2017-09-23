$(document).ready( function(){
    $('#section').removeClass('hiden').delay(4000).queue(function() {
        $('#body').removeClass('scroll');
        $('.loading').remove();
        
        $(function() {
            $('.intro').addClass('go');
        });
    });
    $(window).scroll(function(){
		$('.hideme').each(function(i){
			var bottom_of_object=$(this).offset().top+$(this).outerHeight();
			var bottom_of_window=$(window).scrollTop()+$(window).height();
			if(bottom_of_window>bottom_of_object){
				$(this).animate({opacity:1},800);
			}
		});
	});
});


$(function(){
	$('a[href*="#"]:not([href="#"])').on('click',function(e){
        e.preventDefault();
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
        //var Num3 = $(window).scrollTop() * .2; // speed of title scroll
        //var Num3mod = Num3 + 1;
        return $('.container-vid-shade').css('opacity', Num),
        $(".container-vid").css({"transform":"scale(" + Num2mod + ")"});
        //$(".intro").css({"top":"-" + Num3mod + "px"});
    });
}.call(this));

var nav = $('#container-nav');
var navlinks = $('#container-nav a')
function toggleNav() {
    (nav.hasClass('active')) ? nav.removeClass('active') : nav.addClass('active');
  }
$('#nav-icon').on('click',function(e){
    e.preventDefault();
    toggleNav();
});


for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}

//TweenMax

const up = $('.nav-up');
const down = $('.nav-down');
let counter = 1;
let number = $('.number');

function moveDown(currentSlide) {
  
  var nextSlide = currentSlide.next();
  var currentSlideUp = currentSlide.find('.txt');
  var currentSlideDown = currentSlide.find('.img');
  var nextSlideUp = nextSlide.find('.img');
  var nextSlideDown = nextSlide.find('.txt');
  let currentCopy = currentSlide.find('.copy'); 
  let nextCopy = nextSlide.find('.copy'); 
  
  if( nextSlide.length !== 0 ) {
    
    counter = counter + 1;
    
    if( counter % 2 === 0 ) {
      
      TweenMax.to(number, 0.3, {x: '-100%'})
      TweenMax.to( currentSlideUp, 0.4, { y: '-100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '100%', delay:0.15 });
      setTimeout(function() {number.html('')},300);
      
    } else {
      
      number.html('0'+counter);
      TweenMax.to(number, 0.3, {x: '0%', delay:1})
      TweenMax.to( currentSlideUp, 0.4, { y: '100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '-100%', delay:0.15 });
    }
    
    TweenMax.to( currentCopy, 0.3, {autoAlpha: 0, delay:0.15});
    TweenMax.to( nextCopy, 0.3, {autoAlpha: 1, delay:1});
    TweenMax.to( nextSlideUp, 0.4, { y: '0%', delay:0.15 });
    TweenMax.to( nextSlideDown, 0.4, { y: '0%', delay:0.15 });
    
    $(currentSlide).removeClass('active');
    $(nextSlide).addClass('active');
    
  } 
}

function moveUp(currentSlide) {
  
  var prevSlide = currentSlide.prev();
  var currentSlideUp = currentSlide.find('.img');
  var currentSlideDown = currentSlide.find('.txt');
  var prevSlideUp = prevSlide.find('.txt');
  var prevSlideDown = prevSlide.find('.img');
  let currentCopy = currentSlide.find('.copy');
  let prevCopy = prevSlide.find('.copy'); 
  
  if( prevSlide.length !== 0 ) {
    
    counter = counter - 1;
    
    if( counter % 2 === 0 ) {
      
      
      TweenMax.to(number, 0.3, {x: '-100%'});
      TweenMax.to( currentSlideUp, 0.4, { y: '-100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '100%', delay:0.15 });
      setTimeout(function() {number.html('')},300);

      
    }else {
      
      number.html('0'+counter);
      TweenMax.to(number, 0.3, {x: '0%', delay:1})
      TweenMax.to( currentSlideUp, 0.4, { y: '100%', delay:0.15 });
      TweenMax.to( currentSlideDown, 0.4, { y: '-100%', delay:0.15 });
    }
    
    TweenMax.to( currentCopy, 0.3, {autoAlpha: 0, delay:0.15});
    TweenMax.to( prevCopy, 0.3, {autoAlpha: 1, delay:1});
    TweenMax.to( prevSlideUp, 0.4, { y: '0%', delay:0.15 });
    TweenMax.to( prevSlideDown, 0.4, { y: '0%', delay:0.15 });
    
    $(currentSlide).removeClass('active');
    $(prevSlide).addClass('active');
    
  }
  
}

function hideNav() {
  
  if( counter == $('.slide').length) {    
    TweenMax.to($('.nav-down'),0.5, {autoAlpha: 0, delay:0.5} );
  }else {
     TweenMax.to($('.nav-down'),0.5, {autoAlpha: 1, delay:0.5} );
  }
  if( counter === 1) {    
    TweenMax.to($('.nav-up'),0.5, {autoAlpha: 0, delay:0.5} );
  }else {
     TweenMax.to($('.nav-up'),0.5, {autoAlpha: 1, delay:0.5} );
  }
  
}


down.on('click', function() {
  
  var currentSlide = $('.active');
  moveDown(currentSlide); 
  hideNav();
  
});

up.on('click', function() {
  
  var currentSlide = $('.active');
  moveUp(currentSlide);
  hideNav();

});

//Contact Ajax
function goContact() {
    var form = $('#form-contact').serialize();
    $.ajax({ 
        type: 'POST', 
        url: 'src/ajax_php/controller/contactController.php',
        data: form
    })
        .done(function(data){
        if( data == 0){
            console.log('Task Error '+data);
            animateContact(data);
        } else if ( data == 1){
            console.log('Task Completed '+data);
            animateContact(data);
        }
    })
        .fail(function(data){
            console.log('Task Fail Conection '+data);
    });
}
var formDom = $('#form-contact'),
    formInput = $('#form-contact input, #form-contact textarea, #form-contact div'),
    formDiv = $('#form-contact div'),
    done = "<div id='form-message'><label>E-mail enviado correctamente</lable><br><button onclick='testRetake()' type='button'>Volver a Intentar</button></div>",
    error = "<div id='form-message'><label>E-mail enviado Erroneamente, volver a intentar</lable><br><button onclick='testRetake()' type='button'>Volver a Intentar</button></div>";
    
function animateContact(a) {
    if (a == 0){
        console.log('Esto es if '+a);
        formInput.fadeOut();
        formInput.val('');
        formDom.append(error);
        
    }
    else if (a == 1){
        console.log('Esto es else if '+a);
        formInput.fadeOut();
        formInput.val('');
        formDom.append(done);
    }
}
function testRetake(){
    $('#form-message').remove();
    formInput.fadeIn();
}
function runScriptContact(e){
    if (e.keyCode == 13){
        goContact();
    }
} 