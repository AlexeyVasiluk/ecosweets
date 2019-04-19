$(document).ready(function () {

    document.getElementById("year").innerHTML = new Date().getFullYear();

    // MOBILE MENU SIDEBAR OPEN ===============================
    $('.sidenav').sidenav();

    // SCROLL TO TOP ===============================
    $('.go_to_top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        var window_height = $(window).height();
        var document_height = $(document).height();

        // if (scroll_top + window_height >= window_height) {
        //   $('.scroll_down').css('display', 'none');
        // }
        // else {
        //   $('.scroll_down').css('display', 'block');
        // }

        if ($(this).scrollTop() > $(window).height()) {
            $('.go_to_top').addClass("active");
            $('.order-link').addClass("active");
        } else {
            $('.go_to_top').removeClass("active");
            $('.order-link').removeClass("active");
        }

        if (($(this).scrollTop() + $(window).height()) === document_height) {
            $('#popup__toggle').css("bottom", "160px")
        }
        else {
            $('#popup__toggle').css("bottom", "25px")
        }
    });

    // CAROUSEL INIT ===============================
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    var carouselAutoplayInterval = setInterval(function () {
        $('.fa-angle-right').click();
    }, 7000);

    $('.fa-angle-right').click(function () {
        clearInterval(carouselAutoplayInterval);
        $('.carousel.carousel-slider').carousel('next');
        carouselAutoplayInterval = setInterval(function () {
            $('.fa-angle-right').click();
        }, 7000);
    });

    $('.fa-angle-left').click(function () {
        clearInterval(carouselAutoplayInterval);
        $('.carousel.carousel-slider').carousel('prev');
        carouselAutoplayInterval = setInterval(function () {
            $('.fa-angle-right').click();
        }, 7000);
    });

    // PORTFOLIO TOGGLE ===============================
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.slider').slider({
        indicators: false
    });

    $(".dropdown-trigger").dropdown();

    $('.tabs').tabs();
    $('.lazy').Lazy();

});



