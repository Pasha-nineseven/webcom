$(document).ready(function() {
	flexibility(document.documentElement);

	ymaps.ready(initializeContactsMap);

    //COURSES-PANEL
        // Create the measurement node
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        //console.log(ifHasScroll);
    $('body').on('click','.js-courses-link', function(e){
        e.preventDefault();
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        $('.courses-panel__bg').addClass('is-active').animate({opacity: 1}, 200);
        $('.courses-panel').addClass('is-active');
        //scroll-detect
        var ifHasScroll = $('body').hasVerticalScrollBar();
        if (ifHasScroll) {
            $('body').addClass('fixed');
            $('body').css('padding-right',scrollbarWidth);
            $('.page-header').css('padding-right',scrollbarWidth);
            $('.course-nav').css('padding-right',scrollbarWidth);
        }
    });
    $('body').on('click','.js-courses-panel__bg', function(e){
        document.body.removeChild(scrollDiv);
        setTimeout(function (){
            $('body').removeAttr("style");
            $('.page-header').removeAttr("style");
            $('.course-nav').removeAttr("style");
            $( 'body' ).removeClass('fixed');
        }, 400);
        $('.courses-panel').removeClass('is-active');
        
        $('.courses-panel__bg').removeClass('is-active').animate({opacity: 0}, 200);
    });


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

    if ($('.speaker-img').length>0) {
        var sidebar = new StickySidebar('.speaker-img__in', {
            containerSelector: '.speaker-wrap',
            innerWrapperSelector: '.speaker-img',
            topSpacing: 20,
            bottomSpacing: 20
        });
    }




    $('body').on('click','.js-what__info', function(e){
        e.preventDefault();
        $(this).parents('.what__item').find('.what__add').addClass('active');
    });
    $(document).click(function (e){
        var div = $(".what__item");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".what__add").removeClass('active');
        }
    });




    //teacher-slider
    if ($('.teacher-slider').length>0) {
        var $gallery = $('.teacher-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: false,
            slidesToShow: 3,
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
});



$(window).scroll(function(){
    var header = $('.page-header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass('fixed');
    else header.removeClass('fixed');
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


(function($) {
    $.fn.hasVerticalScrollBar = function() {
        return this.get(0) ? parseInt( this.get(0).scrollHeight ) > parseInt( this.innerHeight() ) : false;
    };
})(jQuery);

// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="spiker.html">speaker</a></li> \
        <li><a href="course.html">course</a></li> \
	</ol> \
</div>');
