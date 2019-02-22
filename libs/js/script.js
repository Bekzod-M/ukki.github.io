// my-profile-popup
$(".my-profile-img").click(function() {
	$(".user-popup").toggleClass("user-popup-open");
});

$(document).mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".user-popup").length == 0 && $target.closest(".my-profile-img").length == 0) {
		$(".user-popup").removeClass("user-popup-open");
	}
});

$(".icon-bell").click(function() {
	$(".notifications-popup").toggleClass("user-popup-open");
});

$(document).mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".notifications-popup").length == 0 && $target.closest(".icon-bell").length == 0) {
		$(".notifications-popup").removeClass("user-popup-open");
	}
});

$(".icon-envelope").click(function() {
	$(".messages-popup").toggleClass("user-popup-open");
});
$(document).mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".messages-popup").length == 0 && $target.closest(".icon-envelope").length == 0) {
		$(".messages-popup").removeClass("user-popup-open");
	}
});


// spinner
$('.spinner').spinner();

// sortable
$( function() {
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
} );

// rotate icon
$(document).ready(function() {
	$( ".toggle" ).click( function() {
		$("#rotate_icon").toggleClass('flip');
	});
});

// tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})


// masked-input
$(".masked-input-phone").mask("(99) 999 - 99 - 99");

// minibar--fixed
$(window).scroll(function() {
	var scroll_Height = window.pageYOffset;
	if (scroll_Height > 550) {
		$('.tutor-profile-minibar').addClass('fix');
	} else {
		$('.tutor-profile-minibar').removeClass('fix');
	}
});

jQuery(document).ready(function($) {
	var offset = $('#e5').offset().top + $('#e5').height() + 240 - screen.height;
	$(window).scroll(function() {
		var scroll_Height = window.pageYOffset;
		if (scroll_Height < offset) {
			$('.education-c-profle-minibar').addClass('fix');
		} else {
			$('.education-c-profle-minibar').removeClass('fix');
			$('.education-c-profle-minibar').css({
			});;
		}
	});
});


// chosen-menu
var config = {
	'.chosen-select'           : {},
	'.chosen-select-deselect'  : { allow_single_deselect: true },
	'.chosen-select-no-single' : { disable_search_threshold: 10 },
	'.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
	'.chosen-select-rtl'       : { rtl: true },
	'.chosen-select-width'     : { width: '95%' }
}
for (var selector in config) {
	$(selector).chosen(config[selector]);
}

$('.chosen-drop .chosen-search .chosen-search-input:text').attr('placeholder','Qidiruv..');



// form-range
$(".form-range #slider-range.amount").slider({
	min: 400000,
	max: 7450000,
	step: 50000,
	values: [ 400000, 7450000 ],
	slide: function( event, ui ) {
		$(".form-range #amount").val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] + " SOM");
	}
});

$(document).ready(function(){
	$( ".form-range #amount" ).val( "" + $( "#slider-range.amount" ).slider( "values", 0 ) + " - " + $( "#slider-range.amount" ).slider( "values", 1 ) + " SOM" );
});

// ----------------------------------------------------------------------------------

$(".form-range #slider-range.age").slider({
	min: 18,
	max: 84,
	step: 1,
	values: [ 18, 84 ],
	slide: function( event, ui ) {
		$(".form-range #age").val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] + "");
	}
});

$(document).ready(function(){
	$( ".form-range #age" ).val( "" + $( "#slider-range.age" ).slider( "values", 0 ) + " - " + $( "#slider-range.age" ).slider( "values", 1 ) + "" );
});

// ----------------------------------------------------------------------------------

$(".form-range #slider-range.number").slider({
	min: 0,
	max: 68,
	step: 1,
	values: [ 0, 68 ],
	slide: function( event, ui ) {
		$(".form-range #number").val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] + "");
	}
});

$(document).ready(function(){
	$( ".form-range #number" ).val( "" + $( "#slider-range.number" ).slider( "values", 0 ) + " - " + $( "#slider-range.number" ).slider( "values", 1 ) + "" );
});

// calendar
$( function() {
	$( ".datepicker" ).datepicker();
} );

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

	datepicker.regional.uz = {
		closeText: "Yopish",
		prevText: "&#x3C;Oldingi",
		nextText: "Keyingi&#x3E;",
		currentText: "Bugun",
		monthNames: [ "Yanvar","Fevral","Mart","Aprel","May","Iyun",
		"Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr" ],
		monthNamesShort: [ "Yan","Fev","Mar","Apr","May","Iyun",
		"Iyul","Avg","Sen","Okt","Noy","Dek" ],
		dayNames: [ "yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba" ],
		dayNamesShort: [ "yak","du","se","ch","pay","ju","sh" ],
		dayNamesMin: [ "Ya","Du","Se","Ch","Pa","Ju","Sh" ],
		weekHeader: "Hafta",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
		datepicker.setDefaults( datepicker.regional.uz );
		return datepicker.regional.uz;
	} ) );

//slick-slider
$('.application-slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 820,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	]
});

$('.partners-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows : false,
	responsive: [
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	}
	]
});

$('.recommended-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

$('.training-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1180,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

$('.feedback-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	{
		breakpoint: 820,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	]
});


// forgot-password---phone-or-email
$('#phone1, #email1').click(function(){
	if ($('#phone1').is(":checked")) {
		$('.recover-with-phone').addClass('active');
		$('.recover-with-email').removeClass('active');
	} else if ($('#email1').is(":checked")) {
		$('.recover-with-email').addClass('active');
		$('.recover-with-phone').removeClass('active');
	}
});


// replace text when clicked
$('.replace_text-number').click(function(){
	$(this).html('+998997754532');
});

$('.replace_text-email').click(function(){
	$(this).html('ukki@info.com');
});



// collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

// smooth scroll
$(".aside").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

// aside--fixed
$('#sticky').stick_in_parent({
	offset_top: 10
});


// chart-stats
var chart1;
$(document).ready(function(){
	chart1 = new Highcharts.Chart({
		chart: {renderTo: 'container1'},
		series: [{data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]}]
	});
});





// change-btn_name
var readMoreBtn = document.querySelector(".zoomin .btn"),
readMoreContent = document.querySelector(".js-description-info");

readMoreBtn.addEventListener("click", function(event) {
	event.preventDefault();
	readMoreContent.classList.toggle("js-readmore-show");
	this.textContent = this.textContent === 'Kichraytirish' ? 'Kengaytirish' : 'Kichraytirish';
});







