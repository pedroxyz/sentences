(function($) {

	/*	==========================================================================
		A. Preloader
		========================================================================== */

	$(window).load(function() { setTimeout(function(){ $(".loader").fadeOut("slow"); }, 1000); });

	/*	==========================================================================
		B. On blur errors
		========================================================================== */

	$("input").on("blur", function() { $(this).removeClass("alert"); });

	/*	==========================================================================
		C. Functions
		========================================================================== */

	/*
		C.1 Preload images on cache
		========================================================================== */

	function preloadImages(array) {
		if (!preloadImages.list) {
			preloadImages.list = [];
		}
		var list = preloadImages.list;
		for (var i = 0; i < array.length; i++) {
			var img = new Image();
			img.onload = function() {
				var index = list.indexOf(this);
				if (index !== -1) {
					list.splice(index, 1);
				}
			}
			list.push(img);
			img.src = array[i];
		}
	}

	/*
		C.1 Load data quiz, by default on load page a quiz is loaded
		========================================================================== */

	var template,
		result,
		fragment;

	function templateQuerySelector( templateId ) {
		return document.querySelector( '#' + templateId ).innerHTML;
	}

	function resultQuerySelector( resultId ) { 
		return document.querySelector( '#' + resultId );
	}

	function loadQuiz( templateId, resultId, data ) {

		template = templateQuerySelector( templateId );
		result = resultQuerySelector( resultId );
		fragment = '';

		var fraseCurated = data.frase;
		fraseCurated = fraseCurated.replace("0000", "<span class='space'></span>");
		fraseCurated = fraseCurated.replace("0000", "<span class='space'></span>");
		fraseCurated = fraseCurated.replace("0000", "<span class='space'></span>");

		fragment += template
		.replace( /\{\{frase\}\}/, fraseCurated )
		.replace( /\{\{palabra_1\}\}/, data.respuesta1 )
		.replace( /\{\{palabra_2\}\}/, data.respuesta2 )
		.replace( /\{\{palabra_3\}\}/, data.respuesta3 )
		.replace( /\{\{palabra_4\}\}/, data.respuesta4 )
		.replace( /\{\{respuesta\}\}/, data.correcta );

		result.innerHTML = fragment;

	}

	/*
		C.2 Change home background
		========================================================================== */

	function changeHomeBg() {
		var landscapeImg = 'url("img/home/home-landscape.jpg") no-repeat center center fixed';
		var portraitImg = 'url("img/home/home-portrait.jpg") no-repeat center center fixed';
		var mediaQueryCSS = '<style>@media only screen and (orientation: landscape) { body { background: ' + landscapeImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } } @media only screen and (orientation: portrait) { body { background: ' + portraitImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } }</style>';
		$("body").css({
			'background'				:	landscapeImg,
			'-webkit-background-size'	:	'cover',
			'-moz-background-size'		:	'cover',
			'-o-background-size'		:	'cover',
			'-ms-background-size'		:	'cover',
			'background-size'			:	'cover',
			'background-color'			:	'#000',
			'transition'				:	'background 1s linear'
		});
		$('body').append(mediaQueryCSS);
	}

	/*
		C.4 Change rules background
		========================================================================== */

	function changeRulesBg() {
		var landscapeImg = 'url("img/rules/yellow_landscape.jpg") no-repeat center center fixed';
		var portraitImg = 'url("img/rules/yellow_portrait.jpg") no-repeat center center fixed';
		var mediaQueryCSS = '<style>@media only screen and (orientation: landscape) { body { background: ' + landscapeImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } } @media only screen and (orientation: portrait) { body { background: ' + portraitImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } }</style>';
		$("body").css({
			'background'				:	landscapeImg,
			'-webkit-background-size'	:	'cover',
			'-moz-background-size'		:	'cover',
			'-o-background-size'		:	'cover',
			'-ms-background-size'		:	'cover',
			'background-size'			:	'cover',
			'background-color'			:	'#000',
			'transition'				:	'background 1s linear'
		});
		$('body').append(mediaQueryCSS);
	}

	/*
		C.5 Change course select background
		========================================================================== */

	function changeCourseBg() {
		var landscapeImg = 'url("img/course/course_landscape.jpg") no-repeat center center fixed';
		var portraitImg = 'url("img/course/course_portrait.jpg") no-repeat center center fixed';
		var mediaQueryCSS = '<style>@media only screen and (orientation: landscape) { body { background: ' + landscapeImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } } @media only screen and (orientation: portrait) { body { background: ' + portraitImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } }</style>';
		$("body").css({
			'background'				:	landscapeImg,
			'-webkit-background-size'	:	'cover',
			'-moz-background-size'		:	'cover',
			'-o-background-size'		:	'cover',
			'-ms-background-size'		:	'cover',
			'background-size'			:	'cover',
			'background-color'			:	'#000',
			'transition'				:	'background 1s linear'
		});
		$('body').append(mediaQueryCSS);
	}

	/*
		C.6 Change quiz backgrounds
		========================================================================== */

	function changeBg(data){
		var url = data;
		var landscapeImg = 'url("img/backgrounds/landscape/'+ url + '") no-repeat center center fixed';
		var portraitImg = 'url("img/backgrounds/portrait/'+ url + '") no-repeat center center fixed';
		var mediaQueryCSS = '<style>@media only screen and (orientation: landscape) { body { background: ' + landscapeImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } } @media only screen and (orientation: portrait) { body { background: ' + portraitImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; transition: background 1s linear; } }</style>';
		$("body").css({
			'background'				:	landscapeImg,
			'-webkit-background-size'	:	'cover',
			'-moz-background-size'		:	'cover',
			'-o-background-size'		:	'cover',
			'-ms-background-size'		:	'cover',
			'background-size'			:	'cover',
			'background-color'			:	'#000',
			'transition'				:	'background 1s linear'
		});
		$('body').append(mediaQueryCSS);
	}

	/*
		C.6 Change share backgrounds
		========================================================================== */

	function changeShareBg() {
		var landscapeImg = 'url("img/share/share_landscape.jpg") no-repeat center center fixed';
		var portraitImg = 'url("img/share/share_portrait.jpg") no-repeat center center fixed';
		var mediaQueryCSS = '<style>@media only screen and (orientation: landscape) { body { background: ' + landscapeImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; } } @media only screen and (orientation: portrait) { body { background: ' + portraitImg + '; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; } }</style>';
		$("body").css({
			'background'				:	landscapeImg,
			'-webkit-background-size'	:	'cover',
			'-moz-background-size'		:	'cover',
			'-o-background-size'		:	'cover',
			'-ms-background-size'		:	'cover',
			'background-size'			:	'cover',
			'background-color'			:	'#000',
			'transition'				:	'background 1s linear'
		});
		$('body').append(mediaQueryCSS);
	}

	/*
		C.8 Enable course list
		========================================================================== */

	function unlockCourse(data) {

		var max;
		switch(data){
			case '101': max = 1;  break;
			case '102': max = 2;  break;
			case '103': max = 3;  break;
			case '104': max = 4;  break;
			case '105': max = 5;  break;
			case '106': max = 6;  break;
			case '107': max = 7;  break;
			case '108': max = 8;  break;
			case '109': max = 9;  break;
			case '110': max = 10; break;
			case '111': max = 11; break;
			case '112': max = 12; break;
			case '113': max = 13; break;
			case '114': max = 14; break;
			case '115': max = 15; break;
			case '116': max = 16; break;
			case '117': max = 17; break;
			case '118': max = 18; break;
			case '119': max = 19; break;
			case '120': max = 20; break;
			case '121': max = 21; break;
			case '122': max = 22; break;
			case '123': max = 23; break;
			case '124': max = 24; break;
			default: max = 0; break;
		}

		for (var i = 1; i <= max; i++) {
			$('[data-index=' + i + ']').removeClass("locked").addClass("unlocked");
		}

		for (var x = max + 1; x <= 24; x++) {
			$('[data-index=' + x + ']').removeClass("locked").addClass("locked");
		}

	}

	/*
		C.9 Final message
		========================================================================== */

	function finalMessage( points ) {
		if ( points < 8 ) {
			$('#final-message').text(':( puedes hacerlo mejor');
		} else {
			$('#final-message').text('En el inglés no hay quien te gane. Puedes tomar el té con la Reina o cantar junto a Paul McCartney.');
		}
	}

	/*
		C.10 Replay or share
		========================================================================== */

	function replayOrShare( points ) {
		if ( points < 8 ) {
			$('#fb-share-link').html('&#8635;');
			$('#fb-share-link').addClass('go-to-course');
			$('#fb-share-link').removeClass('fb-share');
		} else {
			$('#fb-share-link').html('<img src="img/icons/facebook.png">');
			$('#fb-share-link').addClass('fb-share').removeClass('go-to-course');
		}
	}

	/*
		C.11 Popup share window
		========================================================================== */

	function shareWindow(data) {

		var website = 'https://www.harmonhall.com';
		var imageUrl = 'https://www.harmonhall.com/webapp/oraciones/img/covers/' + data;
		var title = 'Yo ya estoy aprendiendo inglés. ¿Y tú, cuándo te vas a decidir?';
		var caption = 'harmonhall.com';
		var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + website + "&picture=" + imageUrl + "&title=" + title + "&caption=" + caption;
		var win = window.open(shareUrl,'Post to Facebook', 'width=600,height=650');
		win.focus();

	}

	/*	==========================================================================
		D. Animations
		========================================================================== */

/*
		D.1 User error
		========================================================================== */

	function userLoginError() { $(".login-error").fadeIn().delay(1200).fadeOut(); }

	/*
		D.2 Access denied
		========================================================================== */

	function accesDenied() { $(".access-denied").fadeIn().delay(1200).fadeOut(); }

	/*
		D.3 Fade in
		========================================================================== */

	function fadeInQuiz() {
		$(".phrase").hide().fadeIn(1000);
		$("#answer-one").hide().fadeIn(1000);
		$("#answer-two").hide().fadeIn(1000);
		$("#answer-three").hide().fadeIn(1000);
		$("#answer-four").hide().fadeIn(1000);
	}

	/*	==========================================================================
		E. Run game
		========================================================================== */

	/*
		E.1 Prelaad images on cache
		========================================================================== */

	/*Preload background images for secitons - Landscape */
	preloadImages(["img/course/course_landscape.jpg", "img/share/share_landscape.jpg", "img/rules/yellow_landscape.jpg"]);
	/*Preload background images for sections - Portrait */
	preloadImages(["img/course/course_portrait.jpg", "img/share/share_portrait.jpg", "img/rules/yellow_portrait.jpg"]);

	/*
		E.2 Go to login
		========================================================================== */
	$("#go-button").click(function(e) {
		e.preventDefault();
		$("#home").hide("slow");
		$("#login").show("slow");
	});

	/*
		E.3 Login submit and validation
		========================================================================== */

	$('#login-form').on('submit', function (e) {
		e.preventDefault();
		/*Login validation*/
		var studentId = $("#studentId").val();
		var studentPass = $("#studentPass").val();
		
		if ( studentId == "")	{ $("#studentId").addClass("alert"); }
		if ( studentPass == "")	{ $("#studentPass").addClass("alert"); }

		/*	Show quizz	*/
		if (studentId != "" && studentPass != "") {
			$.ajax({
				type: 'POST' ,
				url: 'api/login/login.php',
				data: { user: studentId, password: studentPass },
				success: function( data ) {
					data = jQuery.parseJSON(data);
					if(data.isRegistered == "true") {
						unlockCourse(data.currentCourse);
						$("#login").hide("slow");
						$("#rules").show("slow");
						changeRulesBg();
					} else {
						userLoginError();
					}
				}
			});
		}
	});

	$("#go-to-level-list").click(function() {
		$("#rules").hide("slow");
		$("#course").show("slow");
	});

	/*
		E.4 Course select
		========================================================================== */

	var curso;
	var points;
	var quizData;
	var counter = 0;

	$(document).on( "click", ".locked", function(e) {
		e.preventDefault();
		accesDenied();
	});

	$(document).on( "click", ".unlocked", function(e) {
		e.preventDefault();

		curso = $(this).attr("data-index");
		points = 0;
		quizData = [];

		$.ajax({
			type: 'POST' ,
			url: 'api/content/get.php',
			data: { curso: curso },
			success: function( data ) {

				var bgImgLandscape = [];
				var rtImgLandscape = 'img/backgrounds/landscape/';
				var bgImgPortrait = [];
				var rtImgPortrait = 'img/backgrounds/portrait/';
				var fullImgRoute = '';

				data = jQuery.parseJSON(data);

				for (var i = 0; i < data.length; i++) {
					fullImgRoute = rtImgLandscape + data[i].imagen;
					bgImgLandscape.push(fullImgRoute);
					fullImgRoute = '';

					fullImgRoute = rtImgPortrait + data[i].imagen;
					bgImgPortrait.push(fullImgRoute);
					fullImgRoute = '';
				}

				preloadImages(bgImgLandscape);
				preloadImages(bgImgPortrait);
				
				quizData = data;

				loadQuiz( 'phrase-template', 'phrase-content', quizData[counter] );
				changeBg(quizData[counter].imagen);
				counter++;

			}
		});

		$("#points-num").text(points);
		$("#course").fadeOut('slow');
		$(".loader").fadeIn('slow');

		setTimeout(function(){
			$(".loader").hide();
			$('#quiz').fadeIn('slow');

			/*Set timer 1 minute*/
			var endTime = new Date();
			endTime.setMinutes(endTime.getMinutes() + 2);

			var year	= endTime.getFullYear();
			var month	= ("0" + (endTime.getMonth() + 1)).slice(-2);
			var day		= ("0" + (endTime.getDate())).slice(-2);
			var hours	= ("0" + (endTime.getHours())).slice(-2);
			var minutes = ("0" + (endTime.getMinutes())).slice(-2);
			var seconds = ("0" + (endTime.getSeconds())).slice(-2);

			var endTimeFormated = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;

			$("#clock").countdown(endTimeFormated, function(event) {
				$(this).html(event.strftime('%H:%M:%S'));
			}).on('finish.countdown', function() {
					$("#points-total").text(points);
					finalMessage(points);
					replayOrShare(points);
					$('#quiz').hide("slow");
					$("#result-share").show("slow");
					changeShareBg();
					counter = 0;
			});

		}, 5000);

	});

	/*
		E.5 Get answer, validate and get new data
		==========================================================================-*/

	$(document).on( "click", "#answer-one", function(e) {
		e.preventDefault();

		var answer = $("#answer").text();
		var answerSelected = $( this ).text();

		if ( answer == answerSelected) {
			points++;
			$("#points-num").text(points);
		}

		if ( counter < quizData.length ) {
			loadQuiz( 'phrase-template', 'phrase-content', quizData[counter] );
			changeBg(quizData[counter].imagen);
			fadeInQuiz();
			counter++;
		} else if (counter == quizData.length) {
			$('#clock').countdown('stop');
			$("#points-total").text(points);
			finalMessage(points);
			replayOrShare(points);
			$('#quiz').hide("slow");
			$("#result-share").show("slow");
			changeShareBg();
			counter = 0;
		}

	});

	$(document).on( "click", "#answer-two", function(e) {
		e.preventDefault();

		var answer = $("#answer").text();
		var answerSelected = $( this ).text();

		if ( answer == answerSelected) {
			points++;
			$("#points-num").text(points);
		}

		if ( counter < quizData.length ) {
			loadQuiz( 'phrase-template', 'phrase-content', quizData[counter] );
			changeBg(quizData[counter].imagen);
			fadeInQuiz();
			counter++;
		} else if (counter == quizData.length) {
			$('#clock').countdown('stop');
			$("#points-total").text(points);
			finalMessage(points);
			replayOrShare(points);
			$('#quiz').hide("slow");
			$("#result-share").show("slow");
			changeShareBg();
			counter = 0;
		}

	});

	$(document).on( "click", "#answer-three", function(e) {
		e.preventDefault();

		var answer = $("#answer").text();
		var answerSelected = $( this ).text();

		if ( answer == answerSelected) {
			points++;
			$("#points-num").text(points);
		}

		if ( counter < quizData.length ) {
			loadQuiz( 'phrase-template', 'phrase-content', quizData[counter] );
			changeBg(quizData[counter].imagen);
			fadeInQuiz();
			counter++;
		} else if (counter == quizData.length) {
			$('#clock').countdown('stop');
			$("#points-total").text(points);
			finalMessage(points);
			replayOrShare(points);
			$('#quiz').hide("slow");
			$("#result-share").show("slow");
			changeShareBg();
			counter = 0;
		}

	});

	$(document).on( "click", "#answer-four", function(e) {
		e.preventDefault();

		var answer = $("#answer").text();
		var answerSelected = $( this ).text();

		if ( answer == answerSelected) {
			points++;
			$("#points-num").text(points);
		}

		if ( counter < quizData.length ) {
			loadQuiz( 'phrase-template', 'phrase-content', quizData[counter] );
			changeBg(quizData[counter].imagen);
			fadeInQuiz();
			counter++;
		} else if (counter == quizData.length) {
			$('#clock').countdown('stop');
			$("#points-total").text(points);
			finalMessage(points);
			replayOrShare(points);
			$('#quiz').hide("slow");
			$("#result-share").show("slow");
			changeShareBg();
			counter = 0;
		}

	});

	/*
		E.6 Back Home & Login
		========================================================================== */

	$("#back-btn").click(function(){
		$("#course").hide("slow");
		$("#quiz").hide("slow");
		$("#result-share").hide("slow");
		$("#rules").show("slow");
		changeRulesBg();
	});

	$("#black-logout").click(function(){
		$("#course").hide("slow");
		$("#quiz").hide("slow");
		$("#result-share").hide("slow");
		$("#login").show("slow");
		changeHomeBg();
	});

	$(".how-to-play").click(function() {
		$('#clock').countdown('stop');
		$("#course").hide("slow");
		$("#quiz").hide("slow");
		$("#result-share").hide("slow");
		$("#rules").show("slow");
		changeRulesBg();
	});

	$(".logout").click(function() {
		$('#clock').countdown('stop');
		$("#course").hide("slow");
		$("#quiz").hide("slow");
		$("#result-share").hide("slow");
		$("#login").show("slow");
		changeHomeBg();
	});

	/*
		E.7 Replay, go to course select
		==========================================================================-*/

	$(document).on( "click", ".go-to-course", function(e) {
		e.preventDefault();
		$("#result-share").hide("slow");
		$("#course").show("slow");
		changeRulesBg();
	});

	/*
		E.8 Share on facebook
		========================================================================== */

	$(document).on( "click", ".fb-share", function(e) {
		e.preventDefault();

		var imagesNames = ['8-points.jpg', '9-points.jpg', '10-points.jpg'];

		switch( points ) {
			case 8:
				shareWindow(imagesNames[0]);
				break;
			case 9:
				shareWindow(imagesNames[1]);
				break;
			case 10:
				shareWindow(imagesNames[2]);
				break;
			default:
				console.log("01001000111");
		}
	});

})( jQuery );