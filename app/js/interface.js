$(document).ready(function() {
	flexibility(document.documentElement);

	//ymaps.ready(initializeContactsMap);

    //TOP SUBMENU
    $("body").on("click", ".js-speaker-toggle", function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.speaker-panel').toggleClass('active');
        $('.speaker-panel__bg').fadeToggle();
        $('body').toggleClass('fixed');

        var teacher = $(this).data('teacher');
        $(".speaker-panel__item").addClass('dnone');
        $("#teacher"+teacher).removeClass('dnone');
    });
    $('body').on('click','.speaker-panel__bg', function(e){
        e.preventDefault();
        $('.speaker-panel').removeClass('active');
        $(this).fadeOut();
        $('body').removeClass('fixed');
    });
    $('body').on('click','.js-speaker-panel-close', function(e){
        e.preventDefault();
        $('.speaker-panel').removeClass('active');
        $('.speaker-panel__bg').fadeOut();
        $('body').removeClass('fixed');
    });


    var header = $('.page-header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass('fixed');
    else header.removeClass('fixed');

    //COURSES-PANEL
    $('body').on('click','.js-courses-link', function(e){
        e.preventDefault();
        $('.courses-panel').slideToggle(150);
        $(this).toggleClass('active');
    });
    $(document).click(function (e){
        var div = $(".courses-link");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".courses-toggle-link").removeClass('active');
            $('.courses-panel').slideUp(150);
        }
    });
    
    //MOBILE-MENU
    $('body').on('click','.js-menu-mobile-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle(150);
        $('body').toggleClass('fixed');
    });


    //PHONE-TOGGLE
    $('body').on('click','.js-phone-link-toggle', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.phone-list').slideToggle(150);
    });
    $(document).click(function (e){
        var div = $(".phone-link");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".phone-link-toggle").removeClass('active');
            $('.phone-list').slideUp(150);
        }
    });

    //CABINET-TOGGLE
    $('body').on('click','.js-office-link-toggle', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.cabinet-list').slideToggle(150);
    });
    $(document).click(function (e){
        var div = $(".office-link");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".office-link-toggle").removeClass('active');
            $('.cabinet-list').slideUp(150);
        }
    });

    //offers-add-TOGGLE
    $('body').on('click','.js-offers-add-more__link', function(e){
        e.preventDefault();
        $(this).parents('.offers-add-more').find('.offers-add-more__info').fadeToggle(150);
        $(this).toggleClass('active');
    });
    $(document).click(function (e){
        var div = $(".offers-add-more");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.offers-add-more__info').fadeOut(150);
            $('.offers-add-more__link').removeClass('active');
        }
    });

    //who-add-TOGGLE
    $('body').on('click','.js-who-add__link', function(e){
        e.preventDefault();
        $(this).parents('.who-add').find('.who-add__info').fadeToggle(150);
        $(this).toggleClass('active');
    });
    $(document).click(function (e){
        var div = $(".who-add");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.who-add__info').fadeOut(150);
            $('.who-add__link').removeClass('active');
        }
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
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };

    //POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        // transitionEffect: "slide", 
        // animationEffect: "zoom-in-out", 
        infobar: false,
        clickOutside : 'close',
        buttons: [
            "close"
        ],
    });
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

    //POPUP-IMG
    $(".js-gallery").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        //toolbar  : false,
        infobar: false,
        idleTime: false,
        // onActivate: function(){
        //     alert(1);
        //     $(".fancybox-caption").clone().appendTo(".fancybox-content"); 
        // },
        beforeShow: function(){
            $('.page-header').css('padding-right','17px');
            $('.course-nav').css('padding-right','17px');
        },
        afterClose: function() {
            $('.page-header').css('padding-right','0');
            $('.course-nav').css('padding-right','0');
        },
        buttons: [
            "close"
        ],
        image : {
            protect : true,
        },
    });

    if ($('.speaker-img').length>0) {
        // var sidebar = new StickySidebar('.speaker-img__in', {
        //     containerSelector: '.speaker-wrap',
        //     innerWrapperSelector: '.speaker-img',
        //     topSpacing: 20,
        //     bottomSpacing: 20
        // });
        $(".speaker-img__in").stick_in_parent({
            parent :  ".speaker-wrap " ,
            offset_top: 20,
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
     $('body').on('click','.js-what__close', function(e){
        e.preventDefault();
        $(this).parents('.what__item').find('.what__add').removeClass('active');
    });


    //course-cabinet-slider
    if ($('.course-cabinet-slider').length>0) {
        var $gallery = $('.course-cabinet-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade:true,
            infinite:true,
        });

        //CABINET-SLIDER-TOGGLE
        $('body').on('click','.js-course-cabinet__item', function(e){
            e.preventDefault();
            $('.course-cabinet__item').removeClass('active');
            $(this).addClass('active');
            var course = $(this).data('course');
            $(".course-cabinet-slider").addClass('dnone');
            $("#cabinet-slider"+course).removeClass('dnone');

            $gallery.slick('setPosition');
        });
    };





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
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight:true,
                  }
                },
            ]
        });
    };



    var $gallery_mobile = $('.course-cabinet-slider-mobile');

    $gallery_mobile.slick({
        speed: 250,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 10,
        arrows:true,
        dots:true,
        useTransform:true,
        accessibility: false,
        infinite: true,
        fade:true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    });

    //ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();


        
        setTimeout(function() {
            $gallery_mobile.slick('setPosition');
        }, 150);

        
    });



    var time = $(".timer").attr("data-finish");
        timer(time);



    //JOBS-slider
    if ($('.jobs-slider').length>0) {
        var $gallery = $('.jobs-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 950,
                  settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    dots:true,
                    arrows:false,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                  }
                },
                {
                  breakpoint:700,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                  }
                },
                {
                  breakpoint:600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                  }
                },
            ]
        });
    };




    //ABOUT-slider
    if ($('.about-slider').length>0) {
        var $about_status = $('.about-pagingInfo'),
            $about_gallery = $('.about-slider');

        $about_gallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $about_status.text(i + '/' + slick.slideCount);
        });

        $about_gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade:true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    adaptiveHeight:true,
                  }
                },
            ]
        });
    };

    //ABOUT-YOUTUBE-slider
    if ($('.about-youtube-slider').length>0) {
        var $status = $('.about-youtube-pagingInfo'),
            $about_youtube_gallery = $('.about-youtube-slider');

        $about_youtube_gallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });

        $about_youtube_gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade:true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    adaptiveHeight:true,
                  }
                },
            ]
        });
    };



    //GET-cabinet-slider
    if ($('.get-slider').length>0) {
        var $gallery = $('.get-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade:true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    arrows:false,
                    dots:true,
                  }
                },
            ]
        });
    };


    //TOOLTIP
    if ($('.tooltip').length>0) {
        $('.tooltip').tooltipster({
            animation: 'fade',
            delay: 100,
        });
    };



    $(document).on('click', '.js-anchor-link', function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $('html,body').animate({scrollTop: $(id).offset().top}, 500);
    });


    //reviews-top-slider
    if ($('.reviews-top-slider').length>0) {
        var $gallery = $('.reviews-top-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade:true,
            // slidesToShow: 1,
            // slidesToScroll: 1,
        });
    };

    //reviews-video__slider
    if ($('.reviews-video__slider').length>0) {
        var $gallery = $('.reviews-video__slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };


    //reviews-slider
    if ($('.reviews-slider').length>0) {
        var $gallery = $('.reviews-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight:true,
                  }
                },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1,
                //   }
                // },
            ]
        });
    };



    $('body').on('click','.js-contract-add-show', function(e){
        e.preventDefault();
        $(this).hide();
        $('.contract-add').addClass('active');
    });
    $('body').on('click','.js-show-more-link', function(e){
        e.preventDefault();
        $(this).hide();
        $(this).prev('.page-footer__hidden').addClass('active');
    });

    //latest-slider
    if ($('.latest__slider').length>0) {
        var $gallery = $('.latest__slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                // {
                //   breakpoint: 700,
                //   settings: {
                //     slidesToShow: 4,
                //     slidesToScroll: 1,
                //   }
                // },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                // {
                //   breakpoint: 500,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 1,
                //   }
                // },
            ]
        });
    };



    //speakers-slider
    if ($('.speakers-slider').length>0) {
        var $gallery = $('.speakers-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };

    //TABS
    $(".tab_content").hide(); 
    $(".tabs li:first").addClass("active").show();
    $(".tab_content:first").show();
    //TABS On Click Event
    $(".tabs li").click(function() {
         $(".tabs li a").removeClass("active");
        $(this).find('a').addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });



    //timetable-slider
    if ($('.timetable-slider').length>0) {
        var $gallery = $('.timetable-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };


    //speakers-slider
    if ($('.our-projects__slider').length>0) {
        var $gallery = $('.our-projects__slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
            ]
        });
    };



    slider_course_top__items();
    who_sliderInit();
    why_sliderInit();
    course__docs__list_sliderInit();
    //slider_offers_init();
    //slider_gen_offers_init();
    slider_benefits_init();
    slider_questions_init();
    slider_questions_main_init();




    //CHECK-amount
    if ($('#use_amount').length>0) {
        var startArray = [];
        $("[data-amount]").each(function(i){
            startArray.push($(this).text());
        });
        $('#use_amount').on('click', function () {
            $("[data-amount]").each(function(i,item) {
                var amount = $(this).data('amount'),
                    txt = $(this).text(),
                    disountResult = (txt * amount * 0.01); 
                if ( $('#use_amount').is(':checked') ) {
                    $(this).text(txt - disountResult);
                } else {
                    $(this).text(startArray[i]);
                }
            });
        })
    }

    //CHECK-amount-mobile
    if ($('.cost-table--mobile').length>0) {
        $('.cost-mobile-item input[type="checkbox"]').on('click', function () {
            if ( $(this).is(':checked') ) {
                $(this).parents('.cost-mobile-item').find("[data-amount-mobile]").each(function(i,item) {
                    amount_mob = +$(this).data('amount-mobile');
                    txt_mob = +$(this).text();
                    disountResult_mob = (txt_mob * amount_mob * 0.01); 
                });
                $(this).parents('.cost-mobile-item').find("[data-amount-mobile]").text(txt_mob - disountResult_mob);   
            }
            else {
                $(this).parents('.cost-mobile-item').find("[data-amount-mobile]").each(function(i,item) {
                    sum_mob = $(this).data('sum');
                });
                $(this).parents('.cost-mobile-item').find("[data-amount-mobile]").text(sum_mob);
            } 
        })
    }

        
    
    
});



$(window).scroll(function(){
    var header = $('.page-header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass('fixed');
    else header.removeClass('fixed');
});

$(window).resize(function () {
    slider_course_top__items();
    who_sliderInit();
    why_sliderInit();
    course__docs__list_sliderInit();
    //slider_offers_init();
   // slider_gen_offers_init();
    slider_benefits_init();
    slider_questions_init();
    slider_questions_main_init();
});

// $(window).load(function(){

// });

// functions
function course__docs__list_sliderInit(){
    if ($('.course-docs__list').length>0) {
        var $who = $('.course-docs__list');
        if($(window).width() < 900) {
            $who.not('.slick-initialized').slick({
                infinite: true,
                dots: false,
                arrows:true,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: false,
                responsive: [
                    {
                         breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        } else{
            if($who.hasClass('slick-initialized')) {
                $who.slick("unslick");
            }
        }
    }
}

function who_sliderInit(){
    if ($('.layout--course').length>0) {
        var $who = $('.who__list');
        if($(window).width() < 800) {
            $who.not('.slick-initialized').slick({
                infinite: true,
                dots: false,
                arrows:true,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: false,
                responsive: [
                {
                      breakpoint: 750,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                ]
            });
        } else{
            if($who.hasClass('slick-initialized')) {
                $who.slick("unslick");
            }
        }
    }
}
function why_sliderInit(){
    if ($('.why__list').length>0) {
        var $who = $('.why__list');
        if($(window).width() < 800) {
            $who.not('.slick-initialized').slick({
                infinite: true,
                dots: false,
                arrows:true,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: false,
                responsive: [
                {
                      breakpoint: 750,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                ]
            });
        } else{
            if($who.hasClass('slick-initialized')) {
                $who.slick("unslick");
            }
        }
    }
}

function slider_course_top__items() {
    var $soc_a = $('.course-top__items');
    if($(window).width() < 600) {
        $soc_a.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });
    } else{
        if($soc_a.hasClass('slick-initialized')) {
            $soc_a.slick("unslick");
        }
    }
}

function slider_offers_init() {
    var $offers = $('.offers-add__list');
    if($(window).width() < 768) {
        $offers.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });
    } else{
        if($offers.hasClass('slick-initialized')) {
            $offers.slick("unslick");
        }
    }
}
function slider_benefits_init() {
    var $benefits = $('.our-benefits-in');
    if($(window).width() < 768) {
        $benefits.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        });
    } else{
        if($benefits.hasClass('slick-initialized')) {
            $benefits.slick("unslick");
        }
    }
}

function slider_gen_offers_init() {
    var $gen_offers = $('.offers-gen__list');
    if($(window).width() < 768) {
        $gen_offers.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });
    } else{
        if($gen_offers.hasClass('slick-initialized')) {
            $gen_offers.slick("unslick");
        }
    }
}


function slider_questions_init() {
    var $questions = $('.questions-top__list');
    if($(window).width() < 768) {
        $questions.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });
    } else{
        if($questions.hasClass('slick-initialized')) {
            $questions.slick("unslick");
        }
    }
}
function slider_questions_main_init() {
    var $questions = $('.questions-main__list');
    if($(window).width() < 768) {
        $questions.not('.slick-initialized').slick({
            infinite: true,
            dots: false,
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });
    } else{
        if($questions.hasClass('slick-initialized')) {
            $questions.slick("unslick");
        }
    }
}


function timer(f) {
    var date = new Date(f);
    var f_time = Date.parse(date);

    //console.log(f_time);

    function timer_go() {
        var n_time = Date.now();
        var diff = f_time - n_time;
        if(diff <= 0) return false;
        var left = diff % 1000;

        //секунды
        diff = Math.floor(diff / 1000);
        var s = diff % 60;
        if(s < 10) {
            $(".seconds_1").html(0);
            $(".seconds_2").html(s);
        }else {
            $(".seconds_1").html(Math.floor(s / 10));
            $(".seconds_2").html(s % 10);
        }
        //минуты
        diff = Math.floor(diff / 60);
        var m = diff % 60;
        if(m < 10) {
            $(".minutes_1").html(0);
            $(".minutes_2").html(m);
        }else {
            $(".minutes_1").html(Math.floor(m / 10));
            $(".minutes_2").html(m % 10);
        }
        //часы
        diff = Math.floor(diff / 60);
        var h = diff % 24;
        if(h < 10) {
            $(".hours_1").html(0);
            $(".hours_2").html(h);
        }else {
            $(".hours_1").html(Math.floor(h / 10));
            $(".hours_2").html(h % 10);
        }
        //дни
        var d = Math.floor(diff / 24);
        // console.log(d);
        // if (d <= 1) {
        //     $(".days_1").addClass('disable');
        // }else{
        //     $(".days_1").removeClass('disable');
        // }
        if(d < 10) {
            $(".days_1").html(0);
            $(".days_2").html(d);
             $(".days_1").addClass('disable');
        }else {
            $(".days_1").html(Math.floor(d / 10));
            $(".days_2").html(d % 10);
        }
        setTimeout(timer_go, left);
    }
    setTimeout(timer_go, 0);
}



(function($) {
    $.fn.hasVerticalScrollBar = function() {
        return this.get(0) ? parseInt( this.get(0).scrollHeight ) > parseInt( this.innerHeight() ) : false;
    };
})(jQuery);

// links pages
/*
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
        <li><a href="course.html">course</a></li> \
        <li><a href="spikeri_list_1.html">spikeri_list_1</a></li> \
        <li><a href="contact.html">contact</a></li> \
        <li><a href="otzivi.html">otzivi</a></li> \
        <li><a href="kyrs_otzivi.html">kyrs_otzivi</a></li> \
        <li><a href="spiker.html">speaker</a></li> \
        <li><a href="test.html">Test</a></li> \
        <li><a href="kak_oplatit.html">kak_oplatit</a></li> \
        <li><a href="korp_obuchenie.html">korp_obuchenie</a></li> \
        <li><a href="meropriatia.html">meropriatia</a></li> \
        <li><a href="statja_page.html">statja_page</a></li> \
        <li><a href="news_list.html">news_list</a></li> \
        <li><a href="statji_list.html">statji_list</a></li> \
        <li><a href="kyrsi_list.html">kyrsi_list</a></li> \
        <li><a href="page404.html">page404</a></li> \
        <li><a href="index.html">Index</a></li> \
        <li><a href="about.html">About</a></li> \
        <li><a href="arenda.html">Arenda</a></li> \
        <li><a href="form.html">Form</a></li> \
	</ol> \
</div>');
*/