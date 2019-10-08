$(document).ready(function() {
	flexibility(document.documentElement);

	ymaps.ready(initializeContactsMap);

	//main-products-slider
    if ($('.speaker-slider').length>0) {
        var $gallery = $('.speaker-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            // responsive: [
            //     {
            //       breakpoint: 850,
            //       settings: {
            //         slidesToShow: 5,
            //         slidesToScroll: 1,
            //       }
            //     },
            //     {
            //       breakpoint: 700,
            //       settings: {
            //         slidesToShow: 4,
            //         slidesToScroll: 1,
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //       }
            //     },
            //     {
            //       breakpoint: 500,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //       }
            //     },
            // ]
        });
    };

    //POPUP-INLINE
    // $(".js-popup-inline").fancybox({
    //     speed : 330,
    //     transitionEffect: "slide", 
    //     animationEffect: "zoom-in-out", 
    //     infobar: false,
    //     clickOutside : 'close',
    //     buttons: [
    //         "close"
    //     ],
    // });
    // $("body").on("click", ".js-popup-close", function(e){
    //     e.preventDefault();
    //     parent.jQuery.fancybox.getInstance().close();
    // });

    //POPUP-VIDEO
    $(".js-video-link").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
         clickOutside : 'close',
        buttons: [
            "close"
        ],
    });

});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions
function initializeContactsMap() {
    if ($('#contacts-map').length>0) {

        var myMap = new ymaps.Map("contacts-map", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });  
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/content/label.png", 
            iconImageSize: [76,103],
            iconImageOffset: [-53, -98]
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}

// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
