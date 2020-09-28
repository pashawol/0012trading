"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			},
			eforeLoad: function eforeLoad() {
				document.querySelector("html").classList.add("ficed");
			},
			afterClose: function afterClose() {
				document.querySelector("html").classList.remove("ficed");
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	// /modalCall
	// табы  .
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					var siblings = element.parentNode.querySelector(".".concat(tab, "__btn.active"));
					var siblingsContent = tabs.Content[index].parentNode.querySelector(".".concat(tab, "__content.active"));
					siblings.classList.remove('active');
					siblingsContent.classList.remove('active');
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		}); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		// 	$(this)
		// 		.addClass('active').siblings().removeClass('active')
		// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
		// 		.eq($(this).index()).fadeIn().addClass('active');
		// });
	},
	// /табы
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").after('<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	animateScroll: function animateScroll() {
		// листалка по стр
		$(" .top-nav li a, .scroll-link").click(function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall(); // JSCCommon.tabscostume('tabs');  
	// JSCCommon.animateScroll();
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	var x = window.location.host;
	var screenName;
	screenName = 'main.jpg';

	if (screenName && x === "localhost:3000") {
		$(".foot").after("<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	} // /добавляет подложку для pixel perfect


	function whenResize() {
		var topH = $("header ").innerHeight();

		if ($(window).scrollTop() > topH) {
			$('.top-nav  ').addClass('fixed');
		} else {
			$('.top-nav  ').removeClass('fixed');
		}
	}

	window.addEventListener('resize', function () {
		whenResize();
	}, {
		passive: true
	});
	whenResize();
	var icon = "<svg width=\"49\" height=\"96\" viewBox=\"0 0 49 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1 95L48 48L1.00001 0.999996\" stroke=\"black\"/>\n</svg>";
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var $status = $('.pagingInfo');
	var $slickElement = $('.s-rews__slider--js');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html(i + '<span class="text-secondary"> /</span> ' + slick.slideCount);
	});
	var defSl = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 6000,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		adaptiveHeight: true
	};
	$slickElement.slick(_objectSpread({}, defSl));
	$('.slider-js').slick(_objectSpread({}, defSl)); // $('.fancy-gal:not(.slick-cloned)').fancybox();

	$().fancybox({
		selector: '.s-training .slick-slide:not(.slick-cloned) a'
	});
	$().fancybox({
		selector: '.s-rews .slick-slide:not(.slick-cloned) a'
	});
	$(function () {
		var today = new Date();
		var moscow_time = new Date();
		moscow_time.setTime(today.getTime() + 3 * 60 * 60 * 1000);
		var moscow_next_day_time = new Date();
		moscow_next_day_time.setTime(moscow_time.getTime() + 24 * 60 * 60 * 1000);
		var hours_ak = moscow_time.getUTCHours();
		var day = moscow_time.getUTCDate();
		var month = moscow_time.getUTCMonth();
		var day_of_week = moscow_time.getUTCDay();

		if (hours_ak >= 15) {
			day = moscow_next_day_time.getUTCDate();
			day_of_week = moscow_next_day_time.getUTCDay();
			month = moscow_next_day_time.getUTCMonth();
		}

		var monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var weekdays = ['в воскресенье', 'в понедельник', 'во вторник', 'в среду', 'в четверг', 'пятницу', 'в субботу'];
		$('.js_date').text(day + ' ' + monthes[month]);
		$('.js_weekday').text(weekdays[day_of_week]);
	}); // You can also use "$(window).load(function() {"

	var seats = Math.floor(Math.random() * (32 - 13) + 13);

	function InfoDVDSeats() {
		document.write(seats);
	}

	function ShowTimer() {
		var today = new Date();
		var moscow_time = new Date();
		moscow_time.setTime(today.getTime() + 3 * 60 * 60 * 1000);
		var moscow_next_day_time = new Date();
		moscow_next_day_time.setTime(moscow_time.getTime() + 24 * 60 * 60 * 1000);
		var hours_ak = moscow_time.getUTCHours();
		var day = moscow_time.getUTCDate();
		var month = moscow_time.getUTCMonth();
		var day_of_week = moscow_time.getUTCDay();
		var time_l_nk;

		if (hours_ak >= 15 && hours_ak <= 19) {
			day = moscow_next_day_time.getUTCDate();
			day_of_week = moscow_next_day_time.getUTCDay();
			month = moscow_next_day_time.getUTCMonth();
			time_l_nk = 48;
		} else {
			time_l_nk = 24;
		}

		var _id = "f9af99df355584d1355c120b8d09f0a0";

		while (document.getElementById("timer" + _id)) {
			_id = _id + "0";
		}

		document.write("<div id='timer" + _id + "' style='min-width:369px;height:72px;'></div>");

		var _t = document.createElement("script");

		_t.src = "//info-dvd.ru/js/megatimer/timer.min.js";

		var _f = function _f(_k) {
			var l = new MegaTimer(_id, {
				"view": [1, 1, 1, 1],
				"type": {
					"currentType": "3",
					"params": {
						"weekdays": [1, 1, 1, 1, 1, 1, 1],
						"usertime": false,
						"time": "19:00",
						"tz": -180,
						"hours": time_l_nk,
						"minutes": "0"
					}
				},
				"design": {
					"type": "text",
					"params": {
						"number-font-family": {
							"family": "Comfortaa",
							"link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
						},
						"number-font-size": "60",
						"number-font-color": "#000",
						"separator-margin": "20",
						"separator-on": false,
						"separator-text": ":",
						"text-on": true,
						"text-font-family": {
							"family": "Comfortaa",
							"link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
						},
						"text-font-size": "12",
						"text-font-color": "#c7c7c7"
					}
				},
				"designId": 1,
				"theme": "white",
				"width": 369,
				"height": 72
			});
			if (_k != null) l.run();
		};

		_t.onload = _f;

		_t.onreadystatechange = function () {
			if (_t.readyState == "loaded") _f(1);
		};

		var _h = document.head || document.getElementsByTagName("head")[0];

		_h.appendChild(_t);
	}

	;
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}