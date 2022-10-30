$(document).ready(function(){

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		razones = $('#razones').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;
		contacto = $('#contacto').offset().top;

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 600
		}, 500);
	});

	$('#btn-razones').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: razones - 10
		});
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 20
		});
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 20
		});
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto - 20
		});
	});

// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	});


// Efecto Header
	if ($(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);
	}

});